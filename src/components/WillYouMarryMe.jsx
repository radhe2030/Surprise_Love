export default function WillYouMarryMe({ onYes }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-br from-pink-50 via-rose-100 to-sky-100
                 px-4 relative overflow-hidden"
    >
      {/* Question */}
      <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800 text-center mb-6">Will you marry me? 💍💖</h1>

      {/* 💖 CENTER IMAGE */}
      <div className="mb-6">
        <img
          src="/img/cover2.jpg"
          alt="Proposal"
          className="w-60 sm:w-56 mx-auto
                     drop-shadow-lg"
        />
      </div>

      {/* Cute message instead of NO */}
      <div className="mb-10 text-center space-y-2">
        <p className="text-base sm:text-lg text-rose-600 font-medium">No ka koi option nahi hai 😜</p>
        <p className="text-sm sm:text-base text-gray-600">Cuteie ko haan karni hi padegi 💕</p>
      </div>

      {/* YES BUTTON */}
      <button
        onClick={onYes}
        className="px-6 py-2 rounded-full
                   bg-gradient-to-r from-pink-500 to-rose-500
                   text-white text-lg font-medium
                   shadow-xl
                   hover:scale-110 transition"
      >
        Yes 💍
      </button>
    </div>
  );
}
