/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/1.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[-0.93, -0.98, -1]} scale={[0.57, 0.67, 0.57]} />
      <mesh geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} position={[1, -0.98, -1]} rotation={[0, -Math.PI / 2, 0]} scale={[0.57, 0.67, 0.57]} />
      <mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[-0.82, 0.26, -1]} rotation={[0, 0, -Math.PI / 2]} scale={[0.57, 0.67, 0.57]} />
      <mesh geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} position={[0.12, 0.24, -1]} rotation={[0, 0, -Math.PI]} scale={[0.57, 0.67, 0.57]} />
      <mesh geometry={nodes.Cube007.geometry} material={nodes.Cube007.material} position={[-0.17, 0.26, -1]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.57, -0.67, -0.57]} />
      <mesh geometry={nodes.Cube008.geometry} material={nodes.Cube008.material} position={[0.9, -0.04, 0.5]} scale={[0.11, 0.02, 0.48]} />
      <group position={[0.28, -0.88, 0.49]} scale={[1.09, 1, 1.09]}>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['Shiny White']} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials['Mattress ']} />
      </group>
      <mesh geometry={nodes.Cube004.geometry} material={materials['Shiny White']} position={[-0.49, -0.45, -1.02]} scale={[0.9, 1, 1]} />
      <group position={[0.42, -0.72, -0.64]} scale={0.27}>
        <mesh geometry={nodes.Cube023_1.geometry} material={materials['Basic Brown']} />
        <mesh geometry={nodes.Cube023_2.geometry} material={materials['Chair Cushion']} />
      </group>
      <mesh geometry={nodes.Cylinder.geometry} material={materials.DarkGrey} position={[0.13, -0.9, -0.09]} scale={0.1} />
      <mesh geometry={nodes.Icosphere009.geometry} material={nodes.Icosphere009.material} position={[0.15, -0.89, -0.14]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.08} />
      <group position={[0.84, 0.02, 0.66]} rotation={[Math.PI, -0.37, Math.PI / 2]} scale={0.01}>
        <mesh geometry={nodes.Cylinder008.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Cylinder008_1.geometry} material={materials.Blue} />
        <mesh geometry={nodes.Cylinder008_2.geometry} material={materials.WhiteEye} />
        <mesh geometry={nodes.Cylinder008_3.geometry} material={materials.BlackEye} />
        <mesh geometry={nodes.Cylinder008_4.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Cylinder008_5.geometry} material={materials.GreenGlow} />
        <mesh geometry={nodes.Cylinder008_6.geometry} material={materials['Pillow Texture Red']} />
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.BlackEye} />
      </group>
      <mesh geometry={nodes.Plane018.geometry} material={materials.Grad2} position={[3.22, -1.96, -3.22]} rotation={[1.28, -0.28, 0.75]} scale={1.86} />
      <mesh geometry={nodes.Plane011.geometry} material={materials['Pillow Texture Pink']} position={[0.13, -0.67, 0.49]} scale={[0.48, 0.49, 0.48]} />
      <mesh geometry={nodes.Plane012.geometry} material={materials['Pillow Texture Pink']} position={[0.79, -0.74, 0.28]} rotation={[-Math.PI, -0.01, 2.81]} scale={1.13} />
      <mesh geometry={nodes.Plane013.geometry} material={materials['Pillow Texture Pink']} position={[0.77, -0.74, 0.67]} rotation={[Math.PI, 0.02, -0.33]} scale={-1.13} />
      <mesh geometry={nodes.Icosphere002.geometry} material={materials.Bronze} position={[-0.26, -0.49, -0.97]} scale={0.03} />
      <group position={[0.71, -0.73, -0.94]} scale={[0.27, 0.27, 0.02]}>
        <mesh geometry={nodes.Cube017_1.geometry} material={materials['Red Metal']} />
        <mesh geometry={nodes.Cube017_2.geometry} material={materials['Basic Brown']} />
      </group>
      <group position={[0.75, -0.86, -0.17]}>
        <mesh geometry={nodes.Cube012.geometry} material={materials['PC Case']} />
        <mesh geometry={nodes.Cube012_1.geometry} material={materials['LED Strip Yellow']} />
      </group>
      <mesh geometry={nodes.Cube025_1.geometry} material={materials['Wall Background']} />
      <mesh geometry={nodes.Cube025_2.geometry} material={materials.Flooring} />
      <mesh geometry={nodes.Cube025_3.geometry} material={materials.Wall} />
    </group>
  )
}

useGLTF.preload('/1.gltf')
