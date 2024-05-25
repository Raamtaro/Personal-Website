varying vec2 vUv;

uniform vec2 uMouse;
uniform float uTime;
uniform vec4 uResolution;

void main() {
    gl_FragColor = vec4(vUv, 0.0, 1.0);
    #include <colorspace_fragment>
}