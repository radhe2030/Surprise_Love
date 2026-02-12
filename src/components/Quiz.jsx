import { useState } from "react";

const questions = [
  {
    question: "When things weren’t easy between us, what kept us together? 🤍",
    options: ["Our patience", "Our understanding", "Our love", "All of these 💖"],
    answer: 3,
  },
  {
    question: "What helped us grow stronger as a couple? 🌱",
    options: ["Talking things through", "Learning from mistakes", "Supporting each other", "Everything we faced together ❤️"],
    answer: 3,
  },
  {
    question: "When I was quiet or distant sometimes, what did it mean? 🥺",
    options: ["Life was heavy", "I needed time", "I still cared deeply", "All of the above 💞"],
    answer: 3,
  },
  {
    question: "What do we always choose after misunderstandings? 🌷",
    options: ["Listening with love", "Forgiving each other", "Holding on instead of letting go", "Us, every single time 💍"],
    answer: 3,
  },
  {
    question: "No matter what we face in the future, what will we always be? ♾️",
    options: ["Best friends", "Partners", "Each other’s safe place", "Together — always ❤️"],
    answer: 3,
  },
];

export default function Quiz({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    setAnswers([...answers, selected]);
    setSelected(null);

    if (current === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const score = answers.filter((ans, i) => ans === questions[i].answer).length;

  /* ================= RESULT SCREEN ================= */
  if (showResult) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4
                    bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300"
      >
        {/* RESULT CARD */}
        <div
          className="w-full max-w-lg
                   min-h-[500px]              /* 👈 FIXED HEIGHT */
                   bg-white/90 backdrop-blur-md
                   rounded-2xl shadow-xl
                   p-6 flex flex-col"
        >
          {/* HEADER */}
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            You scored {score}/{questions.length} 💖
          </h2>

          <p className="text-center text-gray-600 mb-6">
            {score === questions.length
              ? "Perfect score 🥹 You know us so well!"
              : score >= questions.length - 1
                ? "Almost perfect 😍 My heart is full!"
                : "Still cute 😌 Because love isn’t about scores."}
          </p>

          {/* ANSWERS REVIEW */}
          <div className="space-y-4 flex-1 overflow-y-auto pr-2">
            {questions.map((q, i) => (
              <div key={i} className="border-b pb-3">
                <p className="text-sm font-medium text-gray-700">{q.question}</p>

                <p className="text-sm mt-1">
                  <span className="font-semibold">Your answer:</span>{" "}
                  <span className={answers[i] === q.answer ? "text-green-600" : "text-red-500"}>{q.options[answers[i]]}</span>
                </p>

                {answers[i] !== q.answer && (
                  <p className="text-sm text-green-600">
                    <span className="font-semibold">Correct:</span> {q.options[q.answer]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON — OUTSIDE CARD */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onFinish}
            className="px-8 py-3 rounded-full
               bg-gradient-to-r from-pink-500 to-rose-500
               text-white font-medium shadow-lg
               hover:scale-105 transition"
          >
            My words for you 💝
          </button>
        </div>
      </div>
    );
  }

  /* ================= QUESTION SCREEN ================= */
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-pink-100 via-rose-200 to-pink-300">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6">
        <p className="text-sm text-gray-500 mb-2">
          Question {current + 1} of {questions.length}
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mb-5">{questions[current].question}</h2>

        <div className="space-y-3">
          {questions[current].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full px-4 py-3 rounded-xl border text-left transition
                ${selected === i ? "bg-pink-500 text-white border-pink-500" : "bg-white hover:bg-pink-100 border-gray-300"}`}
            >
              {opt}
            </button>
          ))}
        </div>

        <button
          disabled={selected === null}
          onClick={handleNext}
          className="mt-6 w-full py-3 rounded-full bg-linear-to-r from-pink-500 to-rose-500
                     text-white font-medium disabled:opacity-50"
        >
          {current === questions.length - 1 ? "See Results 💖" : "Next →"}
        </button>
      </div>
    </div>
  );
}
