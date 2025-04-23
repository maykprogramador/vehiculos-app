import { Car, User, Shield, FileText } from "lucide-react"

export function VehicleForm ({data, handleChange }) {


  return(
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
              pattern="[A-Z]{3}[0-9]{3}"
              maxLength={6}
              title="La placa debe seguir el formato ABC123"
              className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all uppercase"
              value={data.placa}
              onChange={(e) => handleChange("vehiculo", "placa", e.target.value.toUpperCase())}
              required
              placeholder="ABC123"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Marca</label>
            <input
              type="text"
              className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              value={data.marca}
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
              value={data.modelo}
              onChange={(e) => handleChange("vehiculo", "modelo", e.target.value)}
              required
              placeholder="Corolla, Spark, etc."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Año</label>
            <input
              type="number"
              min={1989}
              max={new Date().getFullYear()}
              className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              value={data.año}
              onChange={(e) => handleChange("vehiculo", "año", e.target.value)}
              required
            />
          </div>
        </div>
      </div>
    </div>
  )
}