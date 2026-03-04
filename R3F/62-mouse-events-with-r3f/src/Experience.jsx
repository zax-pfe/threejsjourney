import { useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, meshBounds } from "@react-three/drei";
import { useRef } from "react";
import Hamburger from "./Hamburger.jsx";

export default function Experience() {
  const cube = useRef();
  const hamburger = useGLTF("./hamburger.glb");

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  const eventHandler = (event) => {
    // console.log(event);
    cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
  };

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh position-x={-2} onClick={(event) => event.stopPropagation()}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      {/* <Hamburger position={[0, -1, 0]} scale={0.2} /> */}
      <mesh
        ref={cube}
        raycast={meshBounds}
        position-x={2}
        scale={1.5}
        onClick={eventHandler}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default";
        }}
      >
        {/* <mesh ref={cube} position-x={2} scale={1.5} onPointerMove={eventHandler}> */}
        {/* <mesh
        ref={cube}
        position-x={2}
        scale={1.5}
        onPointerMissed={eventHandler}
      > */}
        {/* <mesh ref={cube} position-x={2} scale={1.5} onPointerOver={eventHandler}> */}
        {/* <mesh
        ref={cube}
        position-x={2}
        scale={1.5}
        onPointerEnter={eventHandler}
        onPointerLeave={eventHandler}
      > */}
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position={[0, -1, 0]} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <primitive
        object={hamburger.scene}
        position={[0, -1, 0]}
        scale={0.2}
        onClick={(event) => {
          console.log("Hamburger clicked", event.object.name);
          event.stopPropagation();
        }}
      />
    </>
  );
}
