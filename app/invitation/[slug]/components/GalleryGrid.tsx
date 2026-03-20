"use client";

const images = [
  "/image/MempelaiPria.jpg",
  "/image/BackTheSun.jpg",
  "/image/MempelaiWanita.jpg",
  "/image/Outdoor.jpg",
  "/image/PrewedPantaiNyanyi.jpg",
  "/image/TheNight.jpg",
  "/image/BackTheSun.jpg",
  "/image/Outdoor.jpg",
  "/image/PrewedPantaiNyanyi.jpg",
];

export default function GalleryGrid() {

  return (

    <div className="columns-2 md:columns-3 gap-4 space-y-4">

      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className="w-full rounded-2xl shadow-md hover:scale-[1.02] transition duration-300"
          alt="gallery"
        />
      ))}

    </div>

  );
}