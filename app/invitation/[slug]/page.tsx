"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";

import MainInvitation from "./components/MainInvitation";

export default function InvitationPage() {

  const params = useParams();
  const slug = params.slug as string;

  const [guest, setGuest] = useState<any>(null);

  useEffect(() => {

    const fetchGuest = async () => {

      const { data } = await supabase
        .from("guests")
        .select("*")
        .eq("slug", slug)
        .single();

      setGuest(data);

    };

    fetchGuest();

  }, [slug]);

  if (!guest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <MainInvitation guestName={guest.name} />
    </div>
  );

}