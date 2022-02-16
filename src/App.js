import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useStore } from './store'
import Sidebar from './Partials/Sidebar'
import { CameraExtension } from './ThreeJSExtensions/Camera'
import WelcomePopup from './Popups/Welcome'
import { TextureLoader } from 'three'
import './App.css'

function Box(props) {
  const { material, size, textures } = useStore()
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.x += props.speed / 100
    ref.current.rotation.y += props.speed / 100
  })
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={new Array(3).fill(size)} />
      <meshStandardMaterial map={textures[material]} />
    </mesh>
  )
}

function LoadTextures() {
  const textures = useLoader(TextureLoader, [`011.jpeg`, `012.jpeg`])
  const { setTextures } = useStore()
  useEffect(() => {
    setTextures(textures)
  }, [textures, setTextures])
  return null
}

function App() {
  const { welcomePopupShown, setWelcomePopupShown, textures } = useStore()
  return (
    <div className="wrap">
      <Sidebar />
      {welcomePopupShown && (
        <WelcomePopup
          onClose={() => {
            setWelcomePopupShown(false)
          }}
        />
      )}
      <div className="scene">
        <Canvas
          camera={{
            position: [0, 5, 3],
          }}
        >
          <CameraExtension />

          <Suspense fallback={null}>
            <LoadTextures />
            <meshStandardMaterial color="#353540" />
            <ambientLight />
            <color attach="background" args={['black']} />
            <gridHelper args={[50, 50, `white`, `gray`]} />
            <pointLight position={[10, 10, 10]} />
            {textures && <Box position={[0, 2, 0]} texture={0} speed={2} />}
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default App
