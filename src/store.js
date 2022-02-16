import create from 'zustand'

export const useStore = create((set) => ({
  // Material
  material: 0,
  setMaterial: (material) => set({ material }),
  // Size
  size: 1,
  setSize: (size) => set({ size }),
  // Popups
  welcomePopupShown: true,
  setWelcomePopupShown: (welcomePopupShown) => set({ welcomePopupShown }),
  // Textures
  textures: [],
  setTextures: (textures) => set({ textures }),
}))
