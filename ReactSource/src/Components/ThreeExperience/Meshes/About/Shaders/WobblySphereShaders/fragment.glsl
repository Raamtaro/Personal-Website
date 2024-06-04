varying vec2 vUv;
uniform float uScrollY;

void main() {
    csm_DiffuseColor.rgb = vec3(vUv, uScrollY);
    csm_Metalness = step(0.0, sin(vUv.x * 100.0 + 0.5));
}