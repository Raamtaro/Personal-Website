varying vec2 vUv;

uniform vec2 uMouse;
uniform float uTime;
uniform vec4 uResolution;
uniform float uScrollY;

void main() {
    gl_FragColor = vec4(vUv, uScrollY, 1.0);
    #include <colorspace_fragment>
}