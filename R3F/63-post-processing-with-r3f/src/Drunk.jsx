import React from "react";
import DrunkEffect from "./DrunkEffect";

export default function Drunk(props) {
  console.log("Drunk props", props);
  const effect = new DrunkEffect(props);
  return <primitive ref={props.ref} object={effect} />;
}
