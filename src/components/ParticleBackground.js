import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function ParticleBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#00ffff",
          },
          links: {
            enable: true,
            color: "#00ffff",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1.5,
          },
          size: {
            value: 2,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticleBackground;