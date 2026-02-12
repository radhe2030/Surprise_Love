import { useRef, useState, useEffect } from "react";

export default function FinalReveal() {
  const audioRef = useRef(null);
  const rafRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState({ current: "0:00", total: "0:00" });

  /* ===== UTIL ===== */
  const formatTime = (sec = 0) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  /* ===== PLAY / PAUSE ===== */
  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (!playing) {
      await audioRef.current.play();
      setPlaying(true);
      animate();
    } else {
      audioRef.current.pause();
      setPlaying(false);
      cancelAnimationFrame(rafRef.current);
    }
  };

  /* ===== PROGRESS + TIME ===== */
  const animate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setProgress((audio.currentTime / audio.duration) * 100 || 0);
    setTime({
      current: formatTime(audio.currentTime),
      total: formatTime(audio.duration),
    });

    rafRef.current = requestAnimationFrame(animate);
  };

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = (e.target.value / 100) * audio.duration;
  };

  /* ===== CLEANUP ===== */
  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center px-4
                  bg-gradient-to-br from-sky-200 via-pink-200 to-rose-300
                  overflow-hidden transition-all duration-700
                  ${playing ? "bg-pulse" : ""}`}
    >
      {/* AUDIO */}
      <audio ref={audioRef} src="/music/Ed_Sheeran_-_Perfect(256k).mp3" preload="auto" />

      {/* CENTER CARD */}
      <div className="relative z-10 w-full max-w-sm text-center space-y-6">
        {/* PHOTO */}
        <div
          className={`mx-auto w-56 h-66 rounded-3xl overflow-hidden shadow-2xl
                      ${playing ? "heart-pulse" : ""}`}
        >
          <img src="/img/us.jpg" alt="Us" className="w-full h-full object-cover" />
        </div>

        {/* TEXT */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">I choose you ❤️</h1>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            Thank you for coming into my life and making it brighter in the simplest ways. Your presence feels like comfort, your love feels like
            home, and choosing you is something my heart will always do.🥹❤️
          </p>
        </div>

        {/* TIME */}
        <p className="text-xs text-gray-600">
          {time.current} / {time.total}
        </p>

        {/* PROGRESS */}
        <input type="range" value={progress} onChange={seek} className="w-full accent-gray-800" />

        {/* CONTROLS */}
        <button
          onClick={togglePlay}
          className="mx-auto w-16 h-16 rounded-full
                     bg-gray-900 text-white text-xl
                     flex items-center justify-center
                     shadow-xl hover:scale-105 transition"
        >
          {playing ? "⏸" : "▶"}
        </button>

        <p className="text-xs text-gray-600">Today · Tomorrow · Always ♾️</p>
      </div>
    </div>
  );
}
