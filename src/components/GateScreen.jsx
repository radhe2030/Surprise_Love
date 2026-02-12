export default function GateScreen({ onStart }) {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex items-center
                 px-6 md:px-16"
      style={{
        backgroundImage: "url('/img/cover.jpg')", // 👉 change image path if needed
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Right-side container */}
      <div className="relative z-10 w-full flex justify-center md:justify-end">
        <div
          className="max-w-md w-full
               rounded-2xl px-8 sm:px-12 py-12
               text-center"
          style={{
            background: "rgba(255, 255, 255, 0.07)",
            backdropFilter: "blur(3.6px)",
            WebkitBackdropFilter: "blur(3.6px)",
            border: "1px solid rgba(255, 255, 255, 0.56)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Heart Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full
                   bg-white/20
                   flex items-center justify-center
                   text-3xl animate-heartBeat"
            >
              ❤️
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-3">Just for you</p>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-6">
            A Little Valentine
            <br />
            Surprise 💖
          </h1>

          {/* Description */}
          <p className="text-sm text-white/80 mb-8">Something small, something sweet, made with all my heart.</p>

          {/* Button */}
          <button
            onClick={onStart}
            className="group relative inline-flex items-center justify-center
                 px-10 py-3 rounded-full
                 bg-gradient-to-r from-pink-600 to-rose-500
                 text-white font-medium tracking-wide
                 shadow-lg shadow-pink-500/40
                 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Open Message 💌</span>
            <span
              className="absolute inset-0 rounded-full bg-white/20 opacity-0
                   group-hover:opacity-100 transition"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
