export default function ActionButtons({ onOpen, onClose }) {
  return (
    <div className="flex gap-6">
      <button onClick={onOpen} className="px-6 py-2 rounded-md border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white transition">
        OPEN
      </button>
      <button onClick={onClose} className="px-6 py-2 rounded-md border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white transition">
        CLOSE
      </button>
    </div>
  );
}
