// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function CameraExtension(props) {
  const { camera } = useThree()
  // useEffect(() => {
  //   const controls = new OrbitControls(camera, gl.domElement)

  //   controls.minDistance = 3
  //   controls.maxDistance = 10
  //   return () => {
  //     controls.dispose()
  //   }
  // }, [camera, gl])
  return <OrbitControls camera={camera} />
}
