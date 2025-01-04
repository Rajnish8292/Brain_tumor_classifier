'use client'
import { Canvas, useLoader, useThree, useFrame, extend  } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'



extend({OrbitControls})


function InitiateOrbitControl(props)
{
  const orbitControlsRef = useRef()
  const {camera, gl, scene} = useThree()

  useFrame((state, delta, xFrame) => {
      if(orbitControlsRef.current)
      {
        orbitControlsRef.current.update()
      }
  })
  return (
    <orbitControls ref={orbitControlsRef} args = {[camera, gl.domElement]} target={[0, 0, 0]} enableZoom={false} enablePan={false} autoRotate enableDamping {...props}/>
  )
}


function Scene(props)
{
  const {camera, scene} = useThree()
  const gltf = useLoader(GLTFLoader, '/human_brain.glb')
  
  return (<primitive position={[0, -2, 0]} name={'brain_model'} object={gltf.scene} scale={[0.045, 0.045, 0.045]} wireframe  {...props}/>)
}

function Lights()
{
  const light1 = useRef()
  const light2 = useRef()
  const light3 = useRef()
  const light4 = useRef()
  return(
    <>
      <ambientLight color={0xffffff} />
      <directionalLight ref={light1} color={0xffffff} intensity={3} position={[-5, 5, 0]} />
      <directionalLight ref={light2} color={0x000000} intensity={10} position={[0, -5, 5]} />

      <directionalLight ref={light3} color={0xffffff} intensity={3} position={[5, 5, 0]} />

      <directionalLight ref={light4} color={0x000000} intensity={10} position={[0, 5, 5]} />

    </>
  )
}

export default function BrainModel() {
    return (<>
            <Canvas camera={{position: [0, 0, 10]}}  style={{height:'400px', width: '400px', background:'transparent', border: '0px solid green'}}>
            <Scene />
            <Lights />
            <InitiateOrbitControl/>

          </Canvas>
    </>)
}   