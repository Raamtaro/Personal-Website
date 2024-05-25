import React, {useMemo, forwardRef} from 'react'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'
import testVertex from './TestShaders/vertex.glsl'
import testFragment from './TestShaders/fragment.glsl'

const TestMeshShaderMaterial = forwardRef((props, ref)=> {
    const shaderMaterial = useMemo(()=> new THREE.ShaderMaterial({
            vertexShader: testVertex,
            fragmentShader: testFragment,
            uniforms:{
                uTime: {value: 0},
                uResolution: {value: new THREE.Vector4()},
                uMouse: {value: new THREE.Vector2()},
            },
        }), [])

    return <primitive object={shaderMaterial} ref={ref} attach="material" />
})

extend({TestMeshShaderMaterial})


export default TestMeshShaderMaterial