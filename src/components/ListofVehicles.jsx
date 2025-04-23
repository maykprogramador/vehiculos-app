
import { useState } from "react"
import { NavLink } from 'react-router-dom';
import { Car, Edit, Trash2, Eye, Search } from "lucide-react"
import {VehicleDetailModal} from "./VehicleDetailModal.jsx"
import { useListVehicles } from "../hooks/useListvehicles.js"

export function ListofVehicles({ vehicles, eliminar }) {
  const { searchTerm, updateSearchTerm, filteredVehicles, handleDelete } = useListVehicles({ vehicles, eliminar })
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Abrir modal con detalles del vehículo
  const openVehicleDetails = (vehicle) => {
    setSelectedVehicle(vehicle)
    setIsModalOpen(true)  
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Vehículos Registrados</h1>
          </div>
          {/* New Vehicle*/}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Botón de Registrar Vehículo */}
            <div className="w-full sm:w-auto">
              <NavLink to="/registro" className= "block text-center w-full sm:w-auto px-4 py-2 rounded-lg font-medium text-sm bg-blue-400 text-white hover:bg-blue-700" >
                Registrar Vehículo
              </NavLink>
            </div>

            {/* Barra de Búsqueda */}
            <div className="w-full sm:w-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar vehículo..."
                  className="pl-10 pr-4 py-2 w-full sm:w-64 border-0 bg-white rounded-lg shadow-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => updateSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* lista para dispositivos de escritorio*/}
        <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden mb-8 animate-fadeIn">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                  <th className="px-6 py-3 text-left text-sm font-medium cursor-pointer" >
                    <div className="flex items-center space-x-1">
                      <span>Placa</span> 
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium cursor-pointer" >
                    <div className="flex items-center space-x-1">
                      <span>Marca</span> 
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium cursor-pointer" >
                    <div className="flex items-center space-x-1">
                      <span>Modelo</span> 
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium cursor-pointer" >
                    <div className="flex items-center space-x-1">
                      <span>Año</span> 
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium cursor-pointer">
                    <div className="flex items-center space-x-1">
                      <span>Propietario</span>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 uppercase">{vehicle.datos.vehiculo.placa}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{vehicle.datos.vehiculo.marca}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{vehicle.datos.vehiculo.modelo}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{vehicle.datos.vehiculo.año}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {vehicle.datos.propietario.nombre}
                    </td>
                    <td className="px-6 py-4 text-sm text-right space-x-2">
                      <button title="Ver más" onClick={() => openVehicleDetails(vehicle)} className="cursor-pointer text-emerald-600 hover:text-emerald-800 transition-colors">
                        <Eye className="inline-block w-5 h-5"/>
                      </button>

                      <button title="Eliminar" onClick={() => handleDelete(vehicle.id)} className="cursor-pointer text-red-600 hover:text-red-800 transition-colors">
                        <Trash2 className="inline-block w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* lista para dispositivos moviles */}
        <div className="md:hidden space-y-4">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-xl shadow-md overflow-hidden animate-fadeIn hover:shadow-lg transition-shadow" >
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-3 px-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-white" />
                    <h2 className="text-lg font-semibold text-white uppercase">{vehicle.datos.vehiculo.placa}</h2>
                  </div>
                  <div className="flex space-x-2">
                    <button title="Ver más"  onClick={() => openVehicleDetails(vehicle)} className="text-white hover:text-gray-200 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>

                    <button title="Eliminar" onClick={() => handleDelete(vehicle.id)}className="text-white hover:text-gray-200 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-500">Marca</p>
                    <p className="text-sm font-medium">{vehicle.datos.vehiculo.marca}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Modelo</p>
                    <p className="text-sm font-medium">{vehicle.datos.vehiculo.modelo}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Año</p>
                    <p className="text-sm font-medium">{vehicle.datos.vehiculo.año}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Propietario</p>
                    <p className="text-sm font-medium">
                      {vehicle.datos.propietario.nombre}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Validamos si hay algun vehiculo en el registro */}
        {filteredVehicles.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Car className="w-16 h-16 mx-auto text-gray-300" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No hay vehículos</h3>
            <p className="mt-2 text-gray-500">No se encontraron vehículos que coincidan con tu búsqueda.</p>
          </div>
        )}

        {/* Modal de detalles simplificado */}
        <VehicleDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          vehicle={selectedVehicle}
        />
      </div>
    </div>
  )
}

