import React, {useRef, useState, useEffect, useMemo} from 'react'
import { useThree, useFrame,  } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import wobbleVertex from '../Shaders/WobblySphereShaders/vertex.glsl'
import wobbleFragment from '../Shaders/WobblySphereShaders/fragment.glsl'
import * as THREE from 'three'
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import GUI from 'lil-gui'


const Wsphere = () => {
    const meshRef = useRef()
    const materialRef = useRef()
    const {size, viewport, camera} = useThree()
    const scroll = useScroll()
    const debugColors = useRef({
        colorA: '#0000ff',
        colorB: '#ff0000'
    })

    useEffect(()=>{
        console.log(`${debugColors.current.colorA}`)
    }, [debugColors])

    const material = useMemo(() => new CustomShaderMaterial({
        baseMaterial: THREE.MeshPhysicalMaterial,
        vertexShader: wobbleVertex,
        fragmentShader: wobbleFragment,
        silent: true,
        uniforms: {
            uScrollY: new THREE.Uniform(0.0),

            uTime: new THREE.Uniform(0.0),
            uPositionFrequency: new THREE.Uniform(0.5),
            uTimeFrequency: new THREE.Uniform(0.4),
            uStrength: new THREE.Uniform(0.3),
            uWarpPositionFrequency: new THREE.Uniform(0.38),
            uWarpTimeFrequency: new THREE.Uniform(0.12),
            uWarpStrength: new THREE.Uniform(1.7),
            uColorA: new THREE.Uniform(new THREE.Color(debugColors.current.colorA)),
            uColorB: new THREE.Uniform(new THREE.Color(debugColors.current.colorB))
            
        },
        metalness: 0.1,
        roughness: 0.0,
        color: '#ffffff',
        transmission: .5,
        ior: 1.5,
        thickness: 1.5,
        transparent: true,
        wireframe: true
    }), [])

    const depthMaterial = useMemo(() => new CustomShaderMaterial({
        baseMaterial: THREE.MeshDepthMaterial,
        vertexShader: wobbleVertex,
        // fragmentShader: wobbleFragment,
        depthPacking: THREE.RGBADepthPacking,
        silent: true,
        uniforms: {
            uScrollY: new THREE.Uniform(0.0),

            uTime: new THREE.Uniform(0.0),
            uPositionFrequency: new THREE.Uniform(0.5),
            uTimeFrequency: new THREE.Uniform(0.4),
            uStrength: new THREE.Uniform(0.3),
            uWarpPositionFrequency: new THREE.Uniform(0.38),
            uWarpTimeFrequency: new THREE.Uniform(0.12),
            uWarpStrength: new THREE.Uniform(1.7),
            uColorA: new THREE.Uniform(new THREE.Color('#0000ff')),
            uColorB: new THREE.Uniform(new THREE.Color('#ff0000'))
            
        },
    }), [])

    useEffect(()=> {
        if (meshRef.current) {
            const geometry = meshRef.current.geometry
            const mergedGeometry = mergeVertices(geometry)
            mergedGeometry.computeTangents()
            meshRef.current.geometry = mergedGeometry
            console.log(meshRef.current.geometry.attributes)
        }
    }, [meshRef])

    useEffect(()=>{
        const gui = new GUI({width: 325});
        gui.add(materialRef.current.uniforms.uPositionFrequency, 'value', 0, 2, 0.001).name('uPositionFrequency')
        gui.add(materialRef.current.uniforms.uTimeFrequency, 'value', 0, 2, 0.001).name('uTimeFrequency')
        gui.add(materialRef.current.uniforms.uStrength, 'value', 0, 2, 0.001).name('uStrength')
        gui.add(materialRef.current.uniforms.uWarpPositionFrequency, 'value', 0, 2, 0.001).name('uWarpPositionFrequency')
        gui.add(materialRef.current.uniforms.uWarpTimeFrequency, 'value', 0, 2, 0.001).name('uWarpTimeFrequency')
        gui.add(materialRef.current.uniforms.uWarpStrength, 'value', 0, 2, 0.001).name('uWarpStrength')

        gui.add(material, 'metalness', 0, 1, 0.001)
        gui.add(material, 'roughness', 0, 1, 0.001)
        gui.add(material, 'transmission', 0, 1, 0.001)
        gui.add(material, 'ior', 0, 10, 0.001)
        gui.add(material, 'thickness', 0, 10, 0.001)

        gui.addColor(debugColors.current, 'colorA').onChange(() => materialRef.current.uniforms.uColorA.value.set(debugColors.current.colorA))
        gui.addColor(debugColors.current, 'colorB').onChange(() => materialRef.current.uniforms.uColorB.value.set(debugColors.current.colorB))

        return () => gui.destroy();
    },[])




    useFrame(({clock})=>{
        const offset = scroll.offset

        if (meshRef.current) {
            meshRef.current.position.y = (-offset * viewport.height) * 4

        }

        if (materialRef.current) {
            materialRef.current.uniforms.uScrollY.value = offset;
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
            
        }
    })

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry attach="geometry"  args={[2.5, 50]}  computeTangents={true} />
            
            {/* <CustomShaderMaterial 
                baseMaterial={new THREE.MeshPhysicalMaterial}
                silent


            /> */}
            {/* Decided to use below approach instead of the React integration because there's I want to provide depthPacking */}
            <primitive object={material} ref={materialRef} attach="material" />
            <primitive object={depthMaterial} attach="depthMaterial" />
        </mesh>
    )
}

export default Wsphere