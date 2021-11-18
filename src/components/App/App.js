import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import Die from '../Die'
import './App.css'

const App = () => {
  return(
    <>
      <h1>The Decision Maker</h1>
      <Canvas id="canvas">
        <ambientLight />
        <pointLight position={[0, 0, 10]} />
        <Die position={[0, 0, 0]} />
      </Canvas>
    </>
  )
}

export default App
