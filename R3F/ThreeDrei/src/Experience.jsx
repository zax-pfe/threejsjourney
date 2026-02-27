import {
  Html,
  OrbitControls,
  TransformControls,
  PivotControls,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls anchor={[0, 0, 0]} depthTest={false}>
        <mesh position-x={-2} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={8}
            occlude={[cubeRef, sphereRef]}
          >
            Super Axel
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0}
          mirror={0.5}
          color="greenyellow"
        />
      </mesh>
      <Float speed={5} intensity={10} rotationIntensity={2}>
        <Text
          font="./ZenDots-Regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={1}
          textAlign="center"
        >
          I love R3F
          <meshNormalMaterial />
        </Text>
      </Float>
    </>
  );
}
