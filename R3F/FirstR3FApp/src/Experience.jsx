import { useFrame, useThree, extend } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export default function Experience() {
  const { camera, gl } = useThree();
  const cubeRef = useRef();
  const sphereRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    sphereRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta * 0.5;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh
          ref={cubeRef}
          scale={1.5}
          position={[2, 0, 0]}
          rotation-y={Math.PI * 0.25}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumblue" />
        </mesh>

        <mesh ref={sphereRef} scale={1} position={[-2, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>

      <mesh scale={10} position={[0, -1, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <planeGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}
