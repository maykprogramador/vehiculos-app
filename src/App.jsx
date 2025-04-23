import { BrowserRouter as Router, Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';
import { useVehiculos } from './hooks/useVehiculos';
import { FormularioVehiculo } from './components/FormularioVehiculo.jsx';
import { ListofVehicles } from './components/ListofVehicles.jsx';

function App() {
  const { vehiculos, agregarVehiculo, eliminarVehiculo } = useVehiculos();
  console.log("renderiza app");
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 px-4 py-6">
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Navigate to="/registro" replace />} />
          <Route path="/registro" element={<FormularioVehiculo onAgregar={agregarVehiculo}/>} />
          <Route path="/lista" element={<ListofVehicles vehicles={vehiculos} eliminar={eliminarVehiculo} />} />
          <Route path="*" element={<p className="text-center text-red-500">Ruta no encontrada</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
