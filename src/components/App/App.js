import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import Ball from '../Ball'
import './App.css'

const App = () => {
  return(
    <>
      <h1>The Decision Maker</h1>
      <Canvas id="canvas">
        <ambientLight />
        <pointLight position={[0, 0, 10]} />
        <Ball position={[0, 0, 0]} />
      </Canvas>
    </>
  )
}

export default App
