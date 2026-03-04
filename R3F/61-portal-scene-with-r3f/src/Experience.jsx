import {
  Sparkles,
  useGLTF,
  OrbitControls,
  useTexture,
  Center,
  shaderMaterial,
} from "@react-three/drei";

import * as THREE from "three";

import portalVertexShader from "./shaders/portal/vertex.glsl";
import portalFragmentShader from "./shaders/portal/fragment.glsl";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

// console.log(portalVertexShader, portalFragmentShader);

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#ffffff"),
    uColorEnd: new THREE.Color("#000000"),
  },
  portalVertexShader,
  portalFragmentShader,
);

extend({ PortalMaterial: PortalMaterial });

export default function Experience() {
  const portalRef = useRef();
  const { nodes } = useGLTF("./model/portal.glb");

  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;

  useFrame((state, delta) => {
    portalRef.current.uTime += delta * 2;
  });

  return (
    <>
      <color args={["#030202"]} attach="background" />
      <OrbitControls makeDefault />
      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          position={nodes.poleLightA.position}
          geometry={nodes.poleLightA.geometry}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>
        <mesh
          position={nodes.poleLightB.position}
          geometry={nodes.poleLightB.geometry}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>

        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
        >
          <portalMaterial ref={portalRef} />
        </mesh>
        <Sparkles size={6} scale={[4, 2, 4]} position={[0, 1, 0]} speed={0.2} />
      </Center>
    </>
  );
}
