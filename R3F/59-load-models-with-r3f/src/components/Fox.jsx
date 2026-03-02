import React, { use } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useControls } from "leva";

export default function Fox() {
  const floxModel = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(floxModel.animations, floxModel.scene);
  const [currentAction, setCurrentAction] = useState(null);

  const foxControls = useControls("fox", {
    animationName: { options: animations.names },
  });

  console.log(animations);

  useEffect(() => {
    const action = animations.actions[foxControls.animationName];
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [foxControls.animationName]);

  return (
    <primitive
      object={floxModel.scene}
      scale={0.02}
      position={[-3, -1, 0]}
      rotation-y={0.3}
    />
  );
}

useGLTF.preload("./Fox/glTF/Fox.gltf");
