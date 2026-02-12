export default function MarriageCertificate({ bride = "My Love", groom = "Me", onFinish }) {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="min-h-screen flex items-start justify-center
             bg-gradient-to-br from-pink-50 via-rose-100 to-sky-100
             px-4 pt-26 pb-24"
    >
      {/* CERTIFICATE */}
      <div
        className="relative w-full max-w-md
                   bg-[#fffdf7]
                   border-4 border-double border-rose-400
                   rounded-xl
                   px-6 py-8
                   shadow-2xl text-center"
      >
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Marriage Certificate</h1>

        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Officially Registered with Love 💍</p>

        {/* Body */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4">This certifies that</p>

        <p className="text-lg font-semibold text-rose-600 mb-2">{groom}</p>

        <p className="text-sm text-gray-700 mb-2">&amp;</p>

        <p className="text-lg font-semibold text-rose-600 mb-6">{bride}</p>

        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          have lovingly agreed to be partners for life, promising to support, care, and choose each other every single day.
        </p>

        {/* Date */}
        <p className="text-sm text-gray-600 mb-12">
          Registered on <span className="font-medium">{today}</span>
        </p>

        {/* Stamp */}
        <div
          className="absolute -right-6 -bottom-6
             w-28 h-28
             rounded-full
             border-4 border-rose-500
             bg-white/80
             flex items-center justify-center
             rotate-[-15deg]
             shadow-lg"
        >
          {/* Inner ring */}
          <div
            className="w-20 h-20
               rounded-full
               border-2 border-dashed border-rose-400
               flex flex-col items-center justify-center
               text-rose-600"
          >
            <span className="text-xs font-bold tracking-widest">REGISTERED</span>
            <span className="text-lg leading-none">💍</span>
          </div>
        </div>
      </div>

      {/* ACTION BUTTON */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-full px-6">
        <button
          onClick={onFinish}
          className="mx-auto block
               max-w-xs w-full
               px-8 py-3 rounded-full
               bg-gradient-to-r from-pink-500 to-rose-500
               text-white text-base font-medium
               shadow-xl
               hover:scale-105
               transition-all duration-300"
        >
          Something You Wrote for Me 🥹💕
        </button>
      </div>
    </div>
  );
}
