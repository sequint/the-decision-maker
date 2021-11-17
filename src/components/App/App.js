import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import Ball from '../Ball'

const App = () => {
  return(
    <>
      <h1>The Decision Maker</h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Ball position={[0, -1, 2]} />
      </Canvas>
    </>
  )
}

export default App
