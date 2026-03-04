import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const torusMaterial = new THREE.MeshMatcapMaterial();

export default function Experience() {
  const [matcapTexture] = useMatcapTexture("2E763A_78A0B7_B3D1CF_14F209", 256);
  //   const [torusGeometry, setTorusGeometry] = useState();
  //   const [torusMaterial, setTorusMaterial] = useState();
  //   const donutsGroupRef = useRef();
  const donutsRef = useRef([]);

  useEffect(() => {
    // matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    torusMaterial.matcap = matcapTexture;
    torusMaterial.needsUpdate = true;
  }, []);

  useFrame((state, delta) => {
    for (const donut of donutsRef.current) {
      if (donut) {
        donut.rotation.y += delta * 0.3;
      }
    }
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
      {/* <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} /> */}
      {/* <meshMatcapMaterial ref={setTorusMaterial} matcap={matcapTexture} /> */}

      <Center>
        <Text3D
          material={torusMaterial}
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Hello R3F
        </Text3D>
      </Center>

      {/* <group ref={donutsGroupRef}> */}
      {[...Array(100)].map((value, index) => (
        <mesh
          ref={(element) => (donutsRef.current[index] = element)}
          key={index}
          geometry={torusGeometry}
          material={torusMaterial}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        />
      ))}
      {/* </group> */}
    </>
  );
}
