export default function MarriageFingerprint({ onConfirm }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-br from-pink-50 via-rose-100 to-sky-100
                 px-4 text-center"
    >
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Marriage Registration 💍</h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-gray-600 mb-10">Officially seal this moment with love 💖</p>

      {/* FINGERPRINT BUTTON */}
      <button
        onClick={onConfirm}
        className="w-56 h-56
                   border-4 border-dashed border-rose-400
                   rounded-2xl
                   flex flex-col items-center justify-center
                   bg-white/60 backdrop-blur-md
                   shadow-xl
                   hover:scale-105
                   hover:border-rose-500
                   transition-all duration-300"
      >
        {/* Fingerprint Icon */}
        <span className="text-6xl mb-4">👆</span>

        {/* Button Text */}
        <span className="text-base font-medium text-rose-600">Put your finger</span>
        <span className="text-sm text-gray-600">for marriage 💍</span>
      </button>

      {/* Cute footer text */}
      <p className="mt-10 text-md text-gray-500">This step is irreversible 😌💖</p>
    </div>
  );
}
