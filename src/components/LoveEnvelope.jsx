import { useState } from "react";
import img from "../../public/img/cover.jpg";

export default function LoveEnvelope({ onFinish }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 px-4">
      {/* FLOATING HEARTS — ONLY WHEN OPEN */}
      {open && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="heart-float text-pink-400"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${12 + Math.random() * 16}px`,
                animationDuration: `${6 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            >
              ❤️
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="mb-8 md:mb-10 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center max-w-2xl leading-snug">
        A little Valentine’s letter, written only for you 💖
      </h1>

      {/* Card Perspective */}
      <div className="relative w-full max-w-md h-[420px] perspective">
        {/* Card */}
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(.4,.2,.2,1)]
          card-3d ${open ? "rotate-y-180" : ""}`}
        >
          {/* FRONT — IMAGE */}
          <div className="absolute inset-0 face rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] overflow-hidden group">
            <img src={img} alt="Love Card" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* BACK — LETTER */}
          <div
            className="absolute inset-0 face rotate-y-180 rounded-3xl bg-white shadow-[0_30px_60px_rgba(0,0,0,0.25)]
                          px-6 sm:px-8 py-8 text-center overflow-y-auto"
          >
            <p className="text-sm text-gray-500 mb-4">My love,</p>

            <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
              I don’t know how to put everything I feel into words, but I’ll try anyway. From the moment you came into my life, things started feeling
              warmer, lighter, and more meaningful. You make ordinary days feel special and quiet moments feel full.
            </p>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
              This letter is just a small reminder that you are deeply loved, appreciated, and chosen — today, tomorrow, and always.
            </p>

            <p className="mt-8 text-sm text-gray-600">
              With all my love,
              <br />
              <span className="font-medium text-gray-800">Tishu ❤️</span>
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-4 sm:gap-6 z-10">
        {/* Open / Flip Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="px-7 sm:px-8 py-3 rounded-full
               bg-gradient-to-r from-pink-500 to-rose-500
               text-white font-medium shadow-lg hover:shadow-xl
               hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {open ? "Flip Me" : "Open Letter"}
        </button>

        {/* Memories Button — ONLY AFTER OPEN */}
        {open && (
          <button
            onClick={() => {
              setOpen(false);
              onFinish?.();
            }}
            className="px-7 sm:px-8 py-3 rounded-full
                 bg-white/70 backdrop-blur-md
                 text-pink-600 font-medium border border-pink-300
                 hover:bg-pink-500 hover:text-white
                 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Memories
          </button>
        )}
      </div>
    </div>
  );
}
