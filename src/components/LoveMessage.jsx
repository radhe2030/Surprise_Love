import { useState } from "react";

export default function LoveMessage({ onFinish }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center
                 bg-linear-to-br from-pink-100 to-rose-200
                 px-4 py-10"
    >
      {/* LETTER */}
      <div
        className={`mt-4 relative w-full max-w-sm
                    burnt-paper
                    min-h-130
                    px-7 py-12
                    text-center
                    transition-all duration-700
                    ${open ? "burn-active" : ""}`}
      >
        <div className="flex flex-col h-full justify-between">
          {/* HEADER */}
          <p className="text-sm text-gray-600">My love,</p>

          {/* BODY */}
          <div className="mt-6 space-y-5">
            <p className="text-[17px] leading-relaxed text-gray-700">
              This little letter holds feelings that words can never fully explain. From the moment you entered my life, everything began to feel
              warmer, softer, and more meaningful.
            </p>

            <p className="text-[17px] leading-relaxed text-gray-700">
              Every moment with you feels gentle and special. You make ordinary days beautiful and quiet moments feel full.
            </p>

            <p className="text-[17px] leading-relaxed text-gray-700">
              You are my calm, my happiness, and my favorite place to be — today, tomorrow, and always.
            </p>
          </div>

          {/* SIGNATURE */}
          <p className="mt-8 text-sm text-gray-600">
            With all my heart,
            <br />
            <span className="font-medium text-gray-800">Always yours ❤️</span>
          </p>
        </div>
      </div>

      {/* ACTION BUTTONS (NATURAL FLOW) */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={onFinish}
          className="px-9 py-3 rounded-full
                       bg-linear-to-r from-pink-500 to-rose-500
                       text-white text-base font-medium
                       shadow-lg
                       hover:scale-105 transition"
        >
          Continue 💖
        </button>
      </div>
    </div>
  );
}
