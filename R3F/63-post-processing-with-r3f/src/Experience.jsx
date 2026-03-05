import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  EffectComposer,
  ToneMapping,
  Vignette,
  Glitch,
  Noise,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
// add leva to test the blendFunctions
import { BlendFunction, GlitchMode } from "postprocessing";
import { MeshBasicMaterial } from "three";
import Drunk from "./Drunk";
import { useRef, useEffect } from "react";
import { useControls, button } from "leva";

export default function Experience() {
  const drunkRef = useRef();

  const controls = useControls("postProcess", {
    amplitude: { value: 0.1, min: 0.01, max: 3, step: 0.001 },
    frequency: { value: 1, min: 0.5, max: 20, step: 0.01 },
  });

  useEffect(() => {
    console.log("Drunk ref", drunkRef.current);
  }, []);
  return (
    <>
      <color attach="background" args={["#dac9a7"]} />
      <EffectComposer multisampling={8}>
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        {/* <Bloom luminanceThreshold={1.1} mipmapBlur intensity={1.5} /> */}
        {/* <Vignette
          offset={0.3}
          darkness={0.9}
          blendFunction={BlendFunction.NORMAL}
        /> */}
        {/* <Glitch
          delay={[0.5, 1.5]}
          duration={[0.5, 0.3]}
          strength={[0.2, 0.4]}
          mode={GlitchMode.SPORADIC}
        /> */}
        {/* <Noise
          premultiply
          opacity={0.5}
          blendFunction={BlendFunction.SOFT_LIGHT}
        /> */}
        {/* <DepthOfField
          focusDistance={0.025}
          focusLength={0.025}
          bokehScale={6}
        /> */}
        <Drunk
          ref={drunkRef}
          frequency={controls.frequency}
          amplitude={controls.amplitude}
          blendFunction={BlendFunction.DARKEN}
        />
      </EffectComposer>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        {/* <meshStandardMaterial
          color="orange"
          emissive="orange"
          toneMapped={false}
          emissiveIntensity={10}
        /> */}
        {/* <meshBasicMaterial color={[1, 2, 1.5]} /> */}
        <meshBasicMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        {/* <meshStandardMaterial color={[1.5, 1, 4]} /> */}
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
