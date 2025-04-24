import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Car, User, Shield, FileText } from "lucide-react"
import { useFormulario } from '../hooks/useFormulario.js';
import { VehicleForm } from './VehicleForm.jsx';
import { PersonaForm } from './PersonaForm.jsx';
export function FormularioVehiculo({ onAgregar}) 
{
  const { formulario, handleChange, handleSubmit } = useFormulario(onAgregar);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Registrar Vehículo</h1>
            <p className="text-gray-600 mt-2">Complete la información en cada tarjeta</p>
            <p></p>
          </div>
          {/* New Vehicle*/}
          <div className="flex items-center space-x-4 mt-4">
            <div >
              <NavLink to="/lista" className="px-4 py-2 rounded-lg font-medium text-sm bg-green-600 text-white hover:bg-blue-700" > 
              Lista De Vehiculos
              </NavLink>
            </div>
          </div>
          
        </div>

        <form onSubmit={handleSubmit}>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Vehicle Card */}
            <VehicleForm title="Datos del Vehículo" seccion="vehiculo" data={formulario.datos.vehiculo} handleChange={handleChange} icon={<Car className="w-5 h-5 text-white" />} gradientFrom="emerald-500" gradientTo="teal-600" />

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
      </div>
    </div>
  )
}
