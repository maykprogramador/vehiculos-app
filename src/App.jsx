import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FormularioVehiculo } from './components/FormularioVehiculo.jsx'
import { useVehiculos } from './hooks/useVehiculos'
function App() {
  const { vehiculos, agregarVehiculo, eliminarVehiculo } = useVehiculos()
  return (
    <>
      <div>
        <FormularioVehiculo onAgregar={agregarVehiculo} />
      </div>
    </>
  )
}
export default App
