import React, {useRef} from 'react'
import { useThree } from '@react-three/fiber'
import TestMeshShaderMaterial from './TestMeshShaderMaterial'


function TestMesh() {
    const materialRef = useRef()
    const {size, viewport} = useThree()
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