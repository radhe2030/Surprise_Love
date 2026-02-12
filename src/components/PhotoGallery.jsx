import { useState } from "react";

const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg", "/img/6.jpg"];

export default function PhotoGallery({ onNext }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-100 via-blue-100 to-cyan-100 px-6 py-10">
      {/* Title */}
      <h1 className="text-center mt-5 mb-10 text-2xl md:text-3xl font-semibold text-gray-800">Our Memories 💕</h1>

      {/* SQUARE MASONRY GRID */}
      <div className="max-w-6xl mx-auto columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <div key={i} className="break-inside-avoid cursor-pointer" onClick={() => setActiveImage(src)}>
            {/* Square wrapper */}
            <div className="w-full aspect-square overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img src={src} alt="memory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* NEXT BUTTON */}
      <div className="flex flex-col items-center mt-12 gap-3">
        {/* Text ABOVE button */}
        <p className="text-sm text-gray-600">Ready for something fun? 💕</p>

        <button
          onClick={onNext}
          className="px-8 py-3 rounded-2xl
               bg-linear-to-r from-sky-500 to-cyan-500
               text-white font-medium shadow-lg
               hover:scale-105 transition-all duration-300"
        >
          Let’s Play Our Love Quiz 💖
        </button>
      </div>

      {/* FULLSCREEN VIEW */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85
                     flex items-center justify-center p-6"
          onClick={() => setActiveImage(null)}
        >
          <img src={activeImage} alt="full-view" className="max-w-[95vw] max-h-[95vh] object-contain" />
        </div>
      )}
    </div>
  );
}
