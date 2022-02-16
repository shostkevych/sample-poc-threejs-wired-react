import { useLoader, useStore } from '@react-three/fiber'
import { useEffect } from 'react'

export default function TextureLoader() {
  const textures = useLoader(TextureLoader, [`011.jpeg`, `012.jpeg`])
  const { setTextures } = useStore()
  useEffect(() => {
    setTextures(textures)
  }, [textures, setTextures])
  return null
}
