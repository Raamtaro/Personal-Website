varying vec2 vUv;

uniform vec2 uMouse;
uniform float uTime;
uniform vec4 uResolution;

void main() {
    gl_FragColor = vec4(vUv, abs(sin(uTime)), 1.0);
    #include <colorspace_fragment>
}