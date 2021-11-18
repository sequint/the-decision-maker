import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Die = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and pop states
  const [hovered, setHover] = useState(false)
  const [hold, setHold] = useState(false)
  const [release, setRelease] = useState(false)
  // Set state for rotation speed
  const [ rotation, setRotation ] = useState(0.008)

  // Set state for angle of rotation axis
  const [ angle, setAngle ] = useState('y')

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.y += rotation))

  // Control Die size dependant on click events
  const changeSize = () => {
    if (hold) {
      return .5
    }
    else if (release) {
      return 1.8
    }
    else {
      return 1
    }
  }

  const handlePointerUp = event => {
    console.log(mesh.current.rotation)
    setHold(false)
    setRelease(true)
    setRotation(0.2)
    // Set release back to false after .3 seconds to return box to normal size
    setTimeout(() => {
      setRotation(0.008)
      setRelease(false)
    }, 800)
  }

  return(
    <mesh
      {...props}
      ref={mesh}
      scale={changeSize()}
      onPointerDown={(event) => setHold(true)}
      onPointerUp={handlePointerUp}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'lightgrey' : 'grey'} />
    </mesh>
  )
}

export default Die
