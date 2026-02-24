import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    dpr={[1, 2]}
    gl={{
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      outputColorSpace: THREE.sRGBEncoding,
    }}
    // orthographic
    camera={{
      fov: 45,
      // zoom: 50,
      near: 0.1,
      far: 100,
      position: [0, 2, 10],
    }}
  >
    <Experience />
  </Canvas>,
);
