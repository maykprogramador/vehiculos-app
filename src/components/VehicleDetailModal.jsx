"use client"

import { useEffect } from "react"
import { X, Car, User, Shield, FileText } from "lucide-react"

export function VehicleDetailModal({ isOpen, onClose, vehicle }) {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  // Si no hay vehículo o el modal está cerrado, no renderizar
  if (!isOpen || !vehicle) return null

  // Datos del vehículo seleccionado
  const { vehiculo, propietario, tenedor, conductor } = vehicle.datos

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-emerald-600 py-3 px-4 flex justify-between items-center sticky top-0">
          <div className="flex items-center space-x-2">
            <Car className="w-5 h-5 text-white" />
            <h2 className="text-lg font-semibold text-white uppercase">{vehiculo.placa}</h2>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors" aria-label="Cerrar">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6">
          {/* Vehículo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 border-b pb-2">
              <Car className="w-4 h-4 text-emerald-600" />
              <h3 className="font-medium text-gray-800">Datos del Vehículo</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Placa</p>
                <p className="font-medium">{vehiculo.placa}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Marca</p>
                <p className="font-medium">{vehiculo.marca}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Modelo</p>
                <p className="font-medium">{vehiculo.modelo}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Año</p>
                <p className="font-medium">{vehiculo.año}</p>
              </div>
            </div>
          </div>

          {/* Propietario */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 border-b pb-2">
              <User className="w-4 h-4 text-emerald-600" />
              <h3 className="font-medium text-gray-800">Datos del Propietario</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nombre</p>
                <p className="font-medium">{propietario.nombre}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Documento</p>
                <p className="font-medium">{propietario.documento}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-medium">{propietario.telefono}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{propietario.email}</p>
              </div>
            </div>
          </div>

          {/* Tenedor */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 border-b pb-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <h3 className="font-medium text-gray-800">Datos del Tenedor</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nombre</p>
                <p className="font-medium">{tenedor.nombre}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Documento</p>
                <p className="font-medium">{tenedor.documento}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-medium">{tenedor.telefono}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{tenedor.email}</p>
              </div>
            </div>
          </div>

          {/* Conductor */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 border-b pb-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <h3 className="font-medium text-gray-800">Datos del Conductor</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nombre</p>
                <p className="font-medium">{conductor.nombre}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Documento</p>
                <p className="font-medium">{conductor.documento}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-medium">{conductor.telefono}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{conductor.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
