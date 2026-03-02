import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as THREE from "three";
import { Leva } from "leva";
import { StrictMode } from "react";
import { useControls, button } from "leva";

// new THREE.Color("lightblue");

const root = ReactDOM.createRoot(document.querySelector("#root"));
// const created = ({ scene }) => {
//   //   console.log(state.gl);
//   //   state.gl.setClearColor("lightblue", 1);
//   scene.background = new THREE.Color("lightblue");
// };

root.render(
  <StrictMode>
    <Canvas
      shadows={false}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      // onCreated={created}
    >
      <color args={["lightblue"]} attach="background" />
      <Experience />
    </Canvas>
  </StrictMode>,
);
