"use client";

const images = [
  "/images/MempelaiPria.jpg",
  "/images/BackTheSun.jpg",
  "/images/MempelaiWanita.jpg",
  "/images/Outdoor.jpg",
  "/images/PrewedPantaiNyanyi.jpg",
  "/images/TheNight.jpg",
  "/images/BackTheSun.jpg",
  "/images/Outdoor.jpg",
  "/images/PrewedPantaiNyanyi.jpg",
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