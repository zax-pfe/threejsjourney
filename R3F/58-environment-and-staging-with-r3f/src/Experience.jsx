import { useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Perf } from "r3f-perf";
import {
  useHelper,
  BakeShadows,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  Sky,
  Environment,
  Lightformer,
  Stage,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { blur } from "three/tsl";
import { useControls } from "leva";

export default function Experience() {
  const cube = useRef();
  const directionalLightRef = useRef();
  const scene = useThree((state) => state.scene);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 0.5);

  const shadowControl = useControls("Shadows", {
    color: "#316d39",
    opacity: { value: 1, min: 0, max: 1, step: 0.01 },
    blur: { value: 1, min: 0, max: 10, step: 0.01 },
  });

  const sunControl = useControls("Sun", {
    positions: {
      value: [1, 2, 3],
      step: 0.01,
    },
  });

  const envMapControls = useControls("Environment Map", {
    intensity: { value: 1, min: 0, max: 10, step: 0.01 },
    envMapHeight: { value: 7, min: 0, max: 20, step: 0.01 },
    envMapRadius: { value: 28, min: 0, max: 100, step: 0.01 },
    envMapScale: { value: 100, min: 0, max: 200, step: 0.01 },
  });

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
    // cube.current.position.x = 2 + Math.sin(state.clock.elapsedTime) * 2;
  });

  //   useEffect(() => {
  //     scene.environmentIntensity = envMapControls.intensity;
  //   }, [envMapControls.intensity]);

  return (
    <>
      {/* <Environment
        ground={{
          height: envMapControls.envMapHeight,
          radius: envMapControls.envMapRadius,
          scale: envMapControls.envMapScale,
        }}
        // background
        // files={[
        //   "./environmentMaps/2/px.jpg",
        //   "./environmentMaps/2/nx.jpg",
        //   "./environmentMaps/2/py.jpg",
        //   "./environmentMaps/2/ny.jpg",
        //   "./environmentMaps/2/pz.jpg",
        //   "./environmentMaps/2/nz.jpg",
        // ]}

        // files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
        preset="sunset"
        // resolution={32}
      >
        {/* <color args={["black"]} attach="background" /> */}
      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[10, 0, 0]} />
        </mesh> */}

      {/* <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={3}
          form="ring"
        /> 
      </Environment> */}

      {/* <BakeShadows /> */}
      {/* <SoftShadows size={25} samples={10} focus={0} /> */}
      <Perf position="top-left" />

      <OrbitControls makeDefault />
      {/* 
      <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={3}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      {/* <ContactShadows
        position={[0, 0, 0]}
        resolution={512}
        far={5}
        scale={10}
        opacity={shadowControl.opacity}
        blur={shadowControl.blur}
        color={shadowControl.color}
      /> */}

      {/* <directionalLight
        ref={directionalLightRef}
        position={sunControl.positions}
        intensity={4.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      /> */}
      {/* <ambientLight intensity={1.5} />

      <Sky sunPosition={sunControl.positions} /> */}
      {/* 
      <mesh castShadow position-x={-2} position-y={1}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" roughness={0.5} />
      </mesh>

      <mesh ref={cube} castShadow position-x={2} position-y={1} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" roughness={0} />
      </mesh> */}

      {/* <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh> */}
      <Stage
        shadows={{
          type: "contact",
          opacity: 0.2,
          blur: 3,
        }}
        environment="city"
        intensity={envMapControls.intensity}
      >
        <mesh ref={cube} castShadow position-x={2} position-y={1} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" roughness={0} />
        </mesh>

        <mesh castShadow position-x={-2} position-y={1}>
          <Sparkles count={1000} scale={10} size={10} speed={0.5} />
          <sphereGeometry />
          <meshStandardMaterial color="orange" roughness={0.5} />
        </mesh>
      </Stage>
    </>
  );
}
