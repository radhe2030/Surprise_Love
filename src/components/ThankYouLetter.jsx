import { useState } from "react";

export default function ThankYouLetter({ onFinish }) {
  const [page, setPage] = useState(1);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200
                 px-4 py-10"
    >
      {/* PAGE INDICATOR */}
      <p className="text-xs text-gray-500 mb-4">Page {page} of 3</p>

      {/* ================= PAGE 1 — LETTER IMAGE 1 ================= */}
      {page === 1 && (
        <div className="w-full max-w-md text-center">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Your Birthday Letter, Forever in My Heart 💞</h1>

          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <img src="/img/page1.jpg" alt="Letter Page 1" className="w-full h-auto object-cover" />
          </div>

          <button
            onClick={() => setPage(2)}
            className="px-8 py-3 rounded-full
                       bg-gradient-to-r from-pink-500 to-rose-500
                       text-white font-medium shadow-lg
                       hover:scale-105 transition"
          >
            Next Page ➝
          </button>
        </div>
      )}

      {/* ================= PAGE 2 — LETTER IMAGE 2 ================= */}
      {page === 2 && (
        <div className="w-full max-w-md text-center">
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <img src="/img/page2.jpg" alt="Letter Page 2" className="w-full h-auto object-cover" />
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setPage(1)}
              className="px-6 py-2 rounded-full
                         border border-pink-300 text-pink-600
                         hover:bg-pink-100 transition"
            >
              Back
            </button>

            <button
              onClick={() => setPage(3)}
              className="px-6 py-2 rounded-full
                         bg-gradient-to-r from-pink-500 to-rose-500
                         text-white font-medium shadow-md
                         hover:scale-105 transition"
            >
              Read My Heart 💖
            </button>
          </div>
        </div>
      )}

      {/* ================= PAGE 3 — YOUR MESSAGE ================= */}
      {page === 3 && (
        <div className="w-full max-w-md flex flex-col items-center">
          {/* MESSAGE CARD */}
          <div
            className="w-full bg-white rounded-2xl shadow-2xl
                 px-6 sm:px-8 py-10 text-center"
          >
            <p className="text-sm text-gray-500 mb-4">My love,</p>

            <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
              I’ve been meaning to say this for a long time. The letter you gave me on my birthday was one of the most beautiful things I’ve ever
              received. Every word felt full of love and care.
            </p>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
              I’m truly sorry that I couldn’t say anything back then. It was never because I didn’t care — situations sometimes make us quiet when our
              hearts are full. But please know that I read your letter again and again, and it meant everything to me.
            </p>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
              Thank you for your words, your effort, and your love. I carry your letter with me, and I carry you even deeper in my heart.
            </p>

            <p className="mt-6 text-sm text-gray-600">
              With gratitude and love,
              <br />
              <span className="font-medium text-gray-800">Tishu ❤️</span>
            </p>
          </div>

          {/* ACTION BUTTONS — OUTSIDE CARD */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setPage(2)}
              className="px-6 py-2 rounded-full
                   border border-pink-300 text-pink-600
                   hover:bg-pink-100 transition"
            >
              Back
            </button>

            <button
              onClick={onFinish}
              className="px-6 py-2 rounded-full
                   bg-gradient-to-r from-pink-500 to-rose-500
                   text-white font-medium shadow-md
                   hover:scale-105 transition"
            >
              One Last Surprise 💖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
