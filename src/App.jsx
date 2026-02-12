import { useState } from "react";

import GateScreen from "./components/GateScreen";
import LoveEnvelope from "./components/LoveEnvelope";
import PhotoGallery from "./components/PhotoGallery";
import Quiz from "./components/Quiz";
import LoveMessage from "./components/LoveMessage";
import WillYouMarryMe from "./components/WillYouMarryMe";
import MarriageFingerprint from "./components/MarriageFingerprint";
import MarriageCertificate from "./components/MarriageCertificate";
import ThankYouLetter from "./components/ThankYouLetter";
import FinalReveal from "./components/FinalReveal";

// ✅ Correct stage order
const STAGES = ["gate", "letter", "gallery", "quiz", "lovemessage", "marry", "fingerprint", "certificate", "thankyou", "final"];

export default function App() {
  const [stage, setStage] = useState("gate");

  // 🔙 Go back one step safely
  const handleBack = () => {
    const index = STAGES.indexOf(stage);
    if (index > 0) {
      setStage(STAGES[index - 1]);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* SCREENS */}
      <div className="relative z-10 min-h-screen">
        {stage === "gate" && <GateScreen onStart={() => setStage("letter")} />}

        {stage === "letter" && <LoveEnvelope onFinish={() => setStage("gallery")} />}

        {stage === "gallery" && <PhotoGallery onNext={() => setStage("quiz")} />}

        {stage === "quiz" && <Quiz onFinish={() => setStage("lovemessage")} />}

        {stage === "lovemessage" && <LoveMessage onFinish={() => setStage("marry")} />}

        {/* 💍 Proposal */}
        {stage === "marry" && <WillYouMarryMe onYes={() => setStage("fingerprint")} />}

        {/* 👆 Fingerprint */}
        {stage === "fingerprint" && <MarriageFingerprint onConfirm={() => setStage("certificate")} />}

        {/* 📜 Certificate */}
        {stage === "certificate" && <MarriageCertificate groom="Meet" bride="Tisha" onFinish={() => setStage("thankyou")} />}

        {/* 💌 Thank You Letter */}
        {stage === "thankyou" && <ThankYouLetter onFinish={() => setStage("final")} />}

        {/* 🎉 Final */}
        {stage === "final" && <FinalReveal />}
      </div>

      {/* 🔙 BACK BUTTON — TOP LEFT */}
      {stage !== "gate" && stage !== "final" && (
        <button
          onClick={handleBack}
          className="fixed top-4 left-4 z-50
                     px-3 py-1.5 rounded-md
                     text-sm font-medium
                     text-gray-600
                     hover:text-gray-900
                     transition"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
