import React from "react";

export default function ({ scale = 1 }) {
  return (
    <mesh position-x={2} scale={scale}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
}
