import React, {useMemo, forwardRef, useEffect, useState, useRef} from 'react'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScroll } from '@react-three/drei'
import testVertex from './TestShaders/vertex.glsl'
import testFragment from './TestShaders/fragment.glsl'

import CustomShaderMaterial from 'three-custom-shader-material/vanilla'

const WSCustomShaderMaterial = forwardRef((props, ref) => {
    useFrame(({ clock }) => {
        
        if (ref.current) {
            ref.current.uniforms.uTime.value = clock.getElapsedTime()
            
        }
    })

    const shaderMaterial = useMemo(()=> { new CustomShaderMaterial({
        
    })
    
    }, [])
})