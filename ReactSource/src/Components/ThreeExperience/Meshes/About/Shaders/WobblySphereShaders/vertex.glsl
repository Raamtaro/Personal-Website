varying vec2 vUv;

uniform float uScrollY;
uniform float uTime;

void main() {

    csm_Position.y += sin(csm_Position.x * 3.0 * uTime * 0.2) * 0.5;
    vUv=uv;
    
}