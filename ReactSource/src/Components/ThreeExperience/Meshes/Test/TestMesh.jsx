import React, {useRef, useState, useEffect} from 'react'
import { useThree, useFrame,  } from '@react-three/fiber'
import TestMeshShaderMaterial from './TestMeshShaderMaterial'
import { useScroll } from '@react-three/drei'



function TestMesh() {
    const meshRef = useRef()
    const materialRef = useRef()
    const {size, viewport, camera} = useThree()
    const scroll = useScroll()

    // useEffect(()=> {console.log(scroll)}, [])
    // useFrame(() => {
    //     const offset = 1 - scroll.offset
    //     console.log(offset)
    // })

    useFrame(()=>{
        const offset = scroll.offset

        if (meshRef.current) {
            meshRef.current.position.y = (-offset * viewport.height) * 4

        }

        if (materialRef.current) {
            materialRef.current.uniforms.uScrollY.value = offset;
        }
    })
  




    return (

                <mesh ref = {meshRef}>
                    <planeGeometry
                        args = {[4, 4]}
                        attach="geometry"
                    />
                    {/* <icosahedronGeometry attach="geometry"  args={[2.5, 50]}/> */}
                    
                    <TestMeshShaderMaterial ref={materialRef} />
                </mesh>

    )
}

export default TestMesh