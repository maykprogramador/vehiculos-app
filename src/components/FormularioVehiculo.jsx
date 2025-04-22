import { useState } from 'react';
import { Car, User, Shield, FileText } from "lucide-react"

import { PersonaForm } from './PersonaForm.jsx';
export function FormularioVehiculo({ onAgregar }) 
{
  const [formulario, setFormulario] = useState({
    datos: {
      vehiculo: { placa: '', marca: '', modelo: '',año: '' },
      propietario: { nombre: '', documento: '', telefono: '', email: '' },
      tenedor: { nombre: '', documento: '', telefono: '', email: '' },
      conductor: { nombre: '', documento: '', telefono: '', email: '' }
    } 
  });

  const handleChange = (seccion, campo, valor) => {
    setFormulario((prev) => ({
      ...prev,
      datos: {
        ...prev.datos,
        [seccion]: {
          ...prev.datos[seccion],
          [campo]: valor,
        },
      },
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validar que todos los campos estén completos
    const camposIncompletos = Object.entries(formulario.datos).some(([seccion, campos]) =>
      Object.entries(campos).some(([campo, valor]) => !valor.trim())
    );
  
    if (camposIncompletos) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }
  
    const nuevoVehiculo = {
      ...formulario,
      id: formulario.datos.vehiculo.placa,
    };
  
    onAgregar(nuevoVehiculo);
    resetFormulario();
  };
 
  const resetFormulario = () => {
    setFormulario({
      datos: {
      vehiculo: { placa: '', marca: '', modelo: '',año: '' },
      propietario: { nombre: '', documento: '', telefono: '', email: ''  },
      tenedor: { nombre: '', documento: '', telefono: '', email: '' },
      conductor: { nombre: '', documento: '', telefono: '', email: '' },
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Registro de Vehículo</h1>
          <p className="text-gray-600 mt-2">Complete la información en cada tarjeta</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Vehicle Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fadeIn hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-4 px-6">
                <div className="flex items-center space-x-2">
                  <Car className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-semibold text-white">Datos del Vehículo</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Placa</label>
                    <input
                      type="text"
                      className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all uppercase"
                      value={formulario.datos.vehiculo.placa}
                      onChange={(e) => handleChange("vehiculo", "placa", e.target.value)}
                      required
                      placeholder="ABC-123"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Marca</label>
                    <input
                      type="text"
                      className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      value={formulario.datos.vehiculo.marca}
                      onChange={(e) => handleChange("vehiculo", "marca", e.target.value)}
                      required
                      placeholder="Toyota, Chevrolet, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Modelo</label>
                    <input
                      type="text"
                      className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      value={formulario.datos.vehiculo.modelo}
                      onChange={(e) => handleChange("vehiculo", "modelo", e.target.value)}
                      required
                      placeholder="Corolla, Spark, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Año</label>
                    <input
                      type="number"
                      min={1900}
                      max={new Date().getFullYear()}
                      className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      value={formulario.datos.vehiculo.año}
                      onChange={(e) => handleChange("vehiculo", "año", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Card */}
            <PersonaForm title="Datos del Propietario" seccion="propietario" data={formulario.datos.propietario} onChange={handleChange} icon={<User className="w-5 h-5 text-white" />} gradientFrom="emerald-500" gradientTo="teal-600" />

            {/* Holder Card */}
            <PersonaForm title="Datos del Tenedor" seccion="tenedor" data={formulario.datos.tenedor} onChange={handleChange} icon={<Shield className="w-5 h-5 text-white" />} gradientFrom="teal-500" gradientTo="cyan-600" />

            {/* Driver Card */}
            <PersonaForm title="Datos del Conductor" seccion="conductor" data={formulario.datos.conductor} onChange={handleChange} icon={<FileText className="w-5 h-5 text-white" />} gradientFrom="cyan-500" gradientTo="blue-600"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mb-8">
            <button type="submit" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium" > Guardar Vehículo </button>
          </div>
        </form>

        {/* Debug Panel - Can be removed in production */}
        <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-700">Datos del Formulario</h3>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Debug</span>
          </div>
          <pre className="bg-gray-50 text-gray-700 p-4 rounded-lg overflow-auto text-sm">
            {JSON.stringify(formulario, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
