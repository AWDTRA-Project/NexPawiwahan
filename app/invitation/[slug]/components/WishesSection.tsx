"use client";

import useReveal from "@/app/hooks/useReveal";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Great_Vibes } from "next/font/google";
import { useParams } from "next/navigation";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function WishesSection() {

  const { ref, visible } = useReveal();
  const params = useParams();
  const slug = params.slug as string;

  const [wishes, setWishes] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("");
  const [guestAttendance, setGuestAttendance] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ================= FETCH ALL WISHES =================
  const fetchWishes = async () => {
    const { data } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });

    setWishes(data || []);
  };

  // ================= FETCH GUEST =================
  const fetchGuest = async () => {
    const { data } = await supabase
      .from("guests")
      .select("attendance")
      .eq("slug", slug)
      .single();

    if (data) setGuestAttendance(data.attendance);
  };

  useEffect(() => {
    if (slug) {
      fetchWishes();
      fetchGuest();
    }
  }, [slug]);

  // ================= SUBMIT =================
  const handleSubmit = async () => {

    if (!name || !message || !attendance) return;

    setLoading(true);

    // INSERT WISH
    await supabase.from("wishes").insert([
      {
        guest_slug: slug,
        name,
        message,
        attendance
      }
    ]);

    // UPDATE GUEST STATUS
    await supabase
      .from("guests")
      .update({ attendance })
      .eq("slug", slug);

    setLoading(false);
    setSuccess(true);

    setTimeout(() => setSuccess(false), 2000);

    setName("");
    setMessage("");
    setAttendance("");

    fetchWishes();
    fetchGuest(); // 🔥 penting
  };

  return (

    <section ref={ref} className="bg-white py-24 px-6">

      {/* TITLE */}
      <div className={`text-center mb-16 transition-all duration-700
        ${visible ? "opacity-100" : "opacity-0 translate-y-10"}`}>

        <h2 className={`${greatVibes.className} text-4xl text-gray-800`}>
          Ucapan & Doa
        </h2>
        <p className="text-gray-500 text-sm mt-2"> Berikan doa terbaik untuk kami </p>
      </div>

      {/* CARD */}
      <div className="max-w-3xl mx-auto bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 text-white">

        {/* STATUS USER */}
        <div className="mb-6">
          <span className="text-xs text-gray-400">Status Anda:</span>

          <span className={`ml-2 px-3 py-1 rounded-full text-xs ${
            guestAttendance === "hadir"
              ? "bg-green-500/20 text-green-300"
              : guestAttendance === "tidak_hadir"
              ? "bg-red-500/20 text-red-300"
              : "bg-white/10 text-gray-300"
          }`}>
            {guestAttendance || "Belum Konfirmasi"}
          </span>
        </div>

        {/* FORM */}
        <div className="space-y-4 mb-10">

          <input
            placeholder="Nama"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 rounded-lg"
          />

          <textarea
            placeholder="Ucapan..."
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 rounded-lg"
          />

          <div className="flex gap-3">

            <button
              onClick={()=>setAttendance("hadir")}
              className={`flex-1 py-2 rounded-full ${
                attendance==="hadir"
                ? "bg-white text-black"
                : "border border-white/30"
              }`}
            >
              ✔ Hadir
            </button>

            <button
              onClick={()=>setAttendance("tidak_hadir")}
              className={`flex-1 py-2 rounded-full ${
                attendance==="tidak_hadir"
                ? "bg-white text-black"
                : "border border-white/30"
              }`}
            >
              ✖ Tidak Hadir
            </button>

          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-white text-black rounded-full"
          >
            {loading ? "Loading..." : success ? "✔ Berhasil" : "Kirim"}
          </button>

        </div>

        {/* LIST */}
        <div className="max-h-[400px] overflow-y-auto space-y-4">

          {wishes.map((item,i)=>(
            <div key={i} className="bg-white/5 p-4 rounded-xl">

              <div className="flex justify-between">

                <h3>{item.name}</h3>

                <span className={`text-xs px-2 py-1 rounded ${
                  item.attendance === "hadir"
                    ? "bg-green-500/20 text-green-300"
                    : "bg-red-500/20 text-red-300"
                }`}>
                  {item.attendance}
                </span>

              </div>

              <p className="text-sm mt-2 text-gray-300">
                {item.message}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}