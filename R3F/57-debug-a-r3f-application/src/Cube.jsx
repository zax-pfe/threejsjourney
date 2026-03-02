import React from "react";

export default function ({ parameters }) {
  return (
    <mesh
      scale={parameters.scale}
      position-x={parameters.positions.x}
      position-y={parameters.positions.y}
      visible={parameters.visible}
    >
      <boxGeometry />
      <meshStandardMaterial color={parameters.color} />
    </mesh>
  );
}
