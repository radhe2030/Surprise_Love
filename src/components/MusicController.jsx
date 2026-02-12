import { useRef } from "react";

export default function MusicController() {
  const audioRef = useRef(null);

  return (
    <>
      <audio ref={audioRef} loop src="/music.mp3" />
      <button onClick={() => audioRef.current.play()} className="fixed bottom-4 right-4 text-white opacity-70">
        🎵
      </button>
    </>
  );
}
