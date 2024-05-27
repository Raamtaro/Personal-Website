import React, {useRef, useState, useEffect} from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import TestMeshShaderMaterial from './TestMeshShaderMaterial'
import { useScroll } from '@react-three/drei'



function TestMesh() {
    const materialRef = useRef()
    const {size, viewport} = useThree()
    const scroll = useScroll()

    // useEffect(()=> {console.log(scroll)}, [])
    // useFrame(() => {
    //     const offset = 1 - scroll.offset
    //     console.log(offset)
    // })
  




    return (

                <mesh>
                    <planeGeometry
                        args = {[viewport.width/1.5, viewport.height/1.5]}
                        attach="geometry"
                    />
                    <TestMeshShaderMaterial ref={materialRef} />
                </mesh>

    )
}

export default TestMesh