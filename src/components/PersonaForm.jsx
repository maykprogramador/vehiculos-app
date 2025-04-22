import React from 'react';

export function PersonaForm({ title, seccion, data, onChange, icon, gradientFrom, gradientTo }) 
{

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fadeIn hover:shadow-xl transition-shadow">
      <div className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} py-4 px-6`}>
        <div className="flex items-center space-x-2">
          {icon}
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 col-span-2">
            <label className="text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              value={data.nombre}
              onChange={(e) => onChange(seccion, "nombre", e.target.value)}
              required
              placeholder="Nombre"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Documento</label>
            <input
              type="text"
              className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              value={data.documento}
              onChange={(e) => onChange(seccion, "documento", e.target.value)}
              required
              placeholder="Número de documento"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              value={data.telefono}
              onChange={(e) => onChange(seccion, "telefono", e.target.value)}
              required
              placeholder="Número de teléfono"
            />
          </div>

          <div className="space-y-2 ">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              value={data.email}
              onChange={(e) => onChange(seccion, "email", e.target.value)}
              required
              placeholder="correo@ejemplo.com"
            />
          </div>

        </div>
      </div>
    </div>
  )
  }