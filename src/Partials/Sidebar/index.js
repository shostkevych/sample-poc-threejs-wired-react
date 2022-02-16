import { useStore } from '../../store'
// Styles
import './styles.css'
export default function Sidebar() {
  const materials = [
    {
      name: 'Leather',
      id: '011',
    },
    {
      name: 'Wall',
      id: '012',
    },
  ]

  const { setMaterial, setSize } = useStore()

  function onMaterialPicked(index) {
    setMaterial(index)
  }

  return (
    <div className="sidebar p-10">
      <div>
        <span>Pick material</span>
        <div>
          {materials.map((material, index) => (
            <div
              key={index}
              className="material p-10"
              onClick={() => {
                onMaterialPicked(index)
              }}
            >
              <img src={`${material.id}.jpeg`} alt={material.name} />
              <span>{material.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span>Pick size</span>
        <div className="mt-10">
          <button
            type="button"
            onClick={() => {
              setSize(1)
            }}
          >
            Small
          </button>
          <button
            type="button"
            onClick={() => {
              setSize(2)
            }}
          >
            Medium
          </button>
          <button
            type="button"
            onClick={() => {
              setSize(3)
            }}
          >
            Large
          </button>
        </div>
      </div>
    </div>
  )
}
