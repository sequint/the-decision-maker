import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Die = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [hold, setHold] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.y += 0.008))

  // Control Die size dependant on click events
  const changeSize = () => {
    if (hold) {
      return .5
    }
    else if (active) {
      return 1.5
    }
    else {
      return 1
    }
  }

  return(
    <mesh
      {...props}
      ref={mesh}
      scale={changeSize()}
      onClick={(event) => setActive(!active)}
      onPointerDown={(event) => setHold(true)}
      onPointerUp={(event) => setHold(false)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'lightgrey' : 'grey'} />
    </mesh>
  )
}

export default Die
