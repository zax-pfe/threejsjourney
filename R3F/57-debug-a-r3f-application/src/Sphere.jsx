import React from "react";

export default function Sphere({ parameters }) {
  return (
    <mesh
      position-x={parameters.positions.x}
      position-y={parameters.positions.y}
      // position-z={parameters.positions.z}
      visible={parameters.visible}
    >
      <sphereGeometry />
      <meshStandardMaterial color={parameters.color} />
    </mesh>
  );
}
