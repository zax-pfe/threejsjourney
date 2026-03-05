import { Effect, BlendFunction } from "postprocessing";
import * as THREE from "three";

const fragmentShader = /* glsl */ `
uniform float frequency;
uniform float amplitude;
uniform float offset;

void mainUv(inout vec2 uv){

  uv.y += sin(uv.x * frequency + offset) * amplitude;

}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor)
{

  // vec4 color = inputColor;
  // color.rgb *= vec3(0.8, 1.1, 0.5);
  // outputColor = color;

  outputColor = vec4(0.8, 1.0, 0.5, 1.0);
}
`;

export default class DrunkEffect extends Effect {
  constructor({ frequency, amplitude, blendFunction = BlendFunction.DARKEN }) {
    super("DrunkEffect", fragmentShader, {
      blendFunction: blendFunction,
      uniforms: new Map([
        ["frequency", new THREE.Uniform(frequency)],
        ["amplitude", new THREE.Uniform(amplitude)],
        ["offset", new THREE.Uniform(0)],
      ]),
    });
    console.log("DrunkEffect props", { blendFunction });
  }

  update(renderer, inputBuffer, delta) {
    this.uniforms.get("offset").value += delta;
  }
}
