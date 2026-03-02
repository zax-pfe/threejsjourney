import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Models from "./components/Models.jsx";
import PlaceHolder from "./components/PlaceHolder.jsx";
import Hamburger from "./components/Hamburger.jsx";
import Fox from "./components/Fox.jsx";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
        {/* <MeshDistortMaterial distort={0.1} speed={1} color="greenyellow" /> */}
      </mesh>
      <Suspense
        fallback={<PlaceHolder position={[0, 0.5, 0]} scale={[2, 3, 2]} />}
      >
        {/* <Models modelPath="/FlightHelmet/glTF/FlightHelmet.gltf" scale={5} position={[0, -1, 0]}/>
        <Models
          modelPath="/hamburger-draco.glb"
          scale={0.35}
          position={[0, 0, 0]}
        /> */}
        <Hamburger position={[0, 0, 0]} scale={0.35} />
      </Suspense>
      <Fox />
    </>
  );
}
