import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function BackgroundHearts() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0, // stays behind everything
        },
        particles: {
          number: {
            value: 35,
            density: { enable: true, area: 800 },
          },
          shape: {
            type: "char",
            character: {
              value: ["❤️", "💖", "💕"],
              font: "Verdana",
              weight: "400",
            },
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: 18,
            random: { enable: true, minimumValue: 12 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // hearts move away from mouse
            },
          },
          modes: {
            repulse: {
              distance: 80,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
