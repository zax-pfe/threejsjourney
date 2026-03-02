import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import Sphere from "./Sphere";
import { useControls, button } from "leva";
import { zip } from "three/examples/jsm/libs/fflate.module.js";
import { color } from "three/tsl";
import { Perf } from "r3f-perf";

export default function Experience() {
  const perfVisible = useControls({
    visible: true,
  });
  const sphereControls = useControls("sphere", {
    positions: { value: { x: -2, y: 0 }, step: 0.01, joystick: "invertY" },
    color: "#ff0000",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [2, 5],
    },
    clickMe: button(() => {
      console.log("clickMe");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  const cubeControls = useControls("cube", {
    positions: { value: { x: 2, y: 0 }, step: 0.01, joystick: "invertY" },
    color: "#0000ff",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [2, 5],
    },
    scale: { value: 1, min: 0.5, max: 2, step: 0.01 },
    clickMe: button(() => {
      console.log("clickMe");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  return (
    <>
      {perfVisible.visible && <Perf position="top-left" />}
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Sphere parameters={sphereControls} />

      <Cube parameters={cubeControls} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
