"use client";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import slugify from "slugify";
import { supabase } from "@/lib/supabaseClient";

export default function GuestsAdmin() {

const [guests,setGuests] = useState<any[]>([]);
const [loading,setLoading] = useState(false);

const [newGuest,setNewGuest] = useState("");
const [search,setSearch] = useState("");

const [editingId,setEditingId] = useState<string | null>(null);
const [editName,setEditName] = useState("");

const [stats,setStats] = useState({
total:0,
hadir:0,
tidak:0,
pending:0
});


// FETCH DATA
const fetchGuests = async ()=>{

const {data,error} = await supabase
.from("guests")
.select("*")
.order("created_at",{ascending:false});

if(!error){

setGuests(data || []);

const total = data.length;

const hadir = data.filter(g=>g.attendance === "hadir").length;

const tidak = data.filter(g=>g.attendance === "tidak_hadir").length;

const pending = data.filter(g=>g.attendance === "pending").length;

setStats({
total,
hadir,
tidak,
pending
});

}

};

useEffect(()=>{
fetchGuests();
},[]);


// ADD GUEST
const addGuest = async ()=>{

if(!newGuest) return;

const slug = slugify(newGuest,{lower:true});

await supabase
.from("guests")
.insert({
name:newGuest,
slug
});

setNewGuest("");
fetchGuests();

};


// UPDATE
const updateGuest = async (id:string)=>{

const slug = slugify(editName,{lower:true});

await supabase
.from("guests")
.update({
name:editName,
slug
})
.eq("id",id);

setEditingId(null);
fetchGuests();

};


// DELETE
const deleteGuest = async (id:string)=>{

if(!confirm("Hapus tamu ini?")) return;

await supabase
.from("guests")
.delete()
.eq("id",id);

fetchGuests();

};


// UPLOAD EXCEL
const handleFileUpload = async (e:any)=>{

const file = e.target.files[0];

const data = await file.arrayBuffer();
const workbook = XLSX.read(data);

const sheet = workbook.Sheets[workbook.SheetNames[0]];
const json = XLSX.utils.sheet_to_json(sheet);

const newGuests = json
.map((guest:any)=>{

const name = guest.name || guest.Name;

if(!name) return null;

return {
name,
slug: slugify(name,{lower:true})
};

})
.filter(Boolean);

setLoading(true);

await supabase.from("guests").insert(newGuests);

setLoading(false);

fetchGuests();

};


// GENERATE LINK
const getInvitationLink = (slug:string)=>{

const domain = process.env.NEXT_PUBLIC_INVITATION_DOMAIN || "http://localhost:3000";

return `${domain}/invitation/${slug}`;

};


// COPY MESSAGE
const copyWhatsAppMessage = (guest:any)=>{

const link = getInvitationLink(guest.slug);

const message = `Kepada Yth.
Bapak/Ibu/Saudara/i ${guest.name}

Om Swastiastu,

Tanpa mengurangi rasa hormat,
kami mengundang Bapak/Ibu/Saudara/i
untuk menghadiri Pernikahan kami.

Berikut link undangan kami untuk info lengkap dari
acara bisa kunjungi :

${link}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya di bagikan melalui pesan ini. 

Terima kasih banyak atas perhatiannya.

Om Shanti Shanti Shanti Om`;

navigator.clipboard.writeText(message);

alert("Pesan berhasil dicopy");

};


// SEARCH FILTER
const filteredGuests = guests.filter((g)=>
g.name.toLowerCase().includes(search.toLowerCase())
);


return(

<div className="min-h-screen bg-[#0d0d0f] text-white px-4 md:px-10 py-8">

          {/* Logo NexCode*/}
          <div className="flex justify-center mb-2">
            <img
            src="/Logo/NexCodePutih.png"
            alt="NexCode Logo"
            className="w-30 md:w-30 drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
            />
          </div>
<div className="text-center mb-10">

<h1 className="uppercase tracking-[0.35em] text-xl text-gray-400">
Invitation Admin
</h1>
<div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mt-4" />

</div>
{/* STATISTICS */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

<StatCard title="Total Tamu" value={stats.total}/>
<StatCard title="Hadir" value={stats.hadir}/>
<StatCard title="Tidak Hadir" value={stats.tidak}/>
<StatCard title="Belum Konfirmasi" value={stats.pending}/>

</div>



{/* FORM */}

<div className="bg-[#111214]/80 backdrop-blur-xl border border-gray-800 rounded-xl p-6 mb-6">

<div className="grid md:grid-cols-2 gap-3 mb-4">

<input
type="text"
placeholder="Tambah nama tamu..."
value={newGuest}
onChange={(e)=>setNewGuest(e.target.value)}
className="bg-[#0d0d0f] border border-gray-700 rounded-lg px-4 py-2"
/>

<button
onClick={addGuest}
className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
>
Tambah
</button>

</div>

<label className="inline-block cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg">

Upload Excel

<input
type="file"
accept=".xlsx"
onChange={handleFileUpload}
className="hidden"
/>

</label>

{loading && (
<p className="text-sm text-gray-400 mt-2">
Uploading...
</p>
)}

</div>



{/* SEARCH */}

<div className="mb-4">

<input
type="text"
placeholder="Cari nama tamu..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full bg-[#111214] border border-gray-700 rounded-lg px-4 py-2"
/>

</div>



{/* TABLE */}

<div className="bg-[#111214]/80 backdrop-blur-xl border border-gray-800 rounded-xl overflow-x-auto">

<table className="min-w-[600px] w-full text-sm">

<thead className="bg-[#0d0d0f] text-gray-400">

<tr>
<th className="p-3 text-center">Nama</th>
{/* <th className="p-3 text-left">Link Undangan</th> */}
<th className="p-3 text-center">Action</th>
</tr>

</thead>


<tbody>

{filteredGuests.map((guest)=>{

const link = getInvitationLink(guest.slug);

return(

<tr
key={guest.id}
className="border-t border-gray-800 hover:bg-[#151517]"
>

<td className="p-3">

  {editingId === guest.id ? (

    <input
      value={editName}
      onChange={(e)=>setEditName(e.target.value)}
      className="bg-[#0d0d0f] border border-gray-700 rounded px-2 py-1"
    />

  ) : (

    <div className="flex items-center gap-3">

      {/* DOT STATUS */}
      <span className={`w-2.5 h-2.5 rounded-full ${
        guest.attendance === "hadir"
          ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
          : guest.attendance === "tidak_hadir"
          ? "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]"
          : "bg-gray-500"
      }`} />

      {/* NAME */}
      <span className="text-white tracking-wide">
        {guest.name}
      </span>

    </div>

  )}

</td>


{/* <td className="p-3 text-gray-400 text-xs break-all">

{link}

</td> */}


<td className="p-3 flex flex-wrap gap-2 justify-center">

{editingId === guest.id ? (

<button
onClick={()=>updateGuest(guest.id)}
className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
>
Save
</button>

):( 

<button
onClick={()=>{setEditingId(guest.id);setEditName(guest.name);}}
className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
>
Update
</button>

)}


<button
onClick={()=>copyWhatsAppMessage(guest)}
className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
>
Copy
</button>


<button
onClick={()=>deleteGuest(guest.id)}
className="bg-red-700 hover:bg-red-600 px-3 py-1 rounded"
>
Delete
</button>

</td>

</tr>

);

})}

</tbody>

</table>

</div>
  {/* Divider */}
  <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6" />

  {/* Copyright */}
  <p className="text-right text-xs text-white/40 tracking-wide">
    © {new Date().getFullYear()} NEXCODE . All rights reserved.
  </p>
</div>

);

}



function StatCard({title,value}:{title:string,value:number}){

return(

<div className="bg-[#111214]/80 backdrop-blur-xl border border-gray-800 rounded-xl p-4">

<p className="text-sm text-gray-400">
{title}
</p>

<p className="text-2xl font-semibold mt-1">
{value}
</p>


</div>
);

}