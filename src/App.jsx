import { BrowserRouter as Router, Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';
import { useVehiculos } from './hooks/useVehiculos';
import { FormularioVehiculo } from './components/FormularioVehiculo.jsx';
import { ListofVehicles } from './components/ListofVehicles.jsx';

function App() {
  const { vehiculos, agregarVehiculo, eliminarVehiculo } = useVehiculos();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 px-4 py-6">
        {/* Navbar */}
        <nav className="flex justify-center gap-4 mb-6">
        <NavLink to="/registro"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-lg font-medium text-sm bg-green-600 text-white shadow"
              : "px-4 py-2 rounded-lg font-medium text-sm bg-blue-400 text-white hover:bg-blue-700"
          } > Registro Vehículos </NavLink>

        <NavLink to="/lista"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-lg font-medium text-sm bg-green-600 text-white shadow"
              : "px-4 py-2 rounded-lg font-medium text-sm bg-blue-500 text-white hover:bg-blue-700"
          } > Lista de Vehículos 
        </NavLink>
        </nav>
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Navigate to="/registro" replace />} />
          <Route path="/registro" element={<FormularioVehiculo onAgregar={agregarVehiculo} />} />
          <Route path="/lista" element={<ListofVehicles vehicles={vehiculos} eliminar={eliminarVehiculo} />} />
          <Route path="*" element={<p className="text-center text-red-500">Ruta no encontrada</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
