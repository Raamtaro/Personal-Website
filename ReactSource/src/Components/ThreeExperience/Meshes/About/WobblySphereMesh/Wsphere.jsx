import React, {useRef, useState, useEffect} from 'react'
import { useThree, useFrame,  } from '@react-three/fiber'
import TestMeshShaderMaterial from './TestMeshShaderMaterial'
import { useScroll } from '@react-three/drei'

import CustomShaderMaterial from 'three-custom-shader-material/vanilla'


const Wsphere = () => {
    const depthMaterial = new CustomShaderMaterial({
        
    })

    return (
        <mesh>
            <icosahedronGeometry attach="geometry"  args={[2.5, 50]}/>

        </mesh>
    )
}

export default Wsphere