import { useState } from "react"

export function useListVehicles({vehicles, eliminar}) {
  const [searchTerm, setSearchTerm] = useState("")

  // Filtrar vehículos por término de búsqueda
  const filteredVehicles = vehicles.filter((vehicle) => {
    const termino = searchTerm.toLowerCase();
  
    return (
      vehicle.datos.vehiculo.placa.toLowerCase().includes(termino) ||
      vehicle.datos.vehiculo.marca.toLowerCase().includes(termino) ||
      vehicle.datos.vehiculo.modelo.toLowerCase().includes(termino) ||
      vehicle.datos.vehiculo.modelo.toLowerCase().includes(termino) ||
      vehicle.datos.propietario.nombre.toLowerCase().includes(termino)
    );
  });

  const updateSearchTerm = (value) => {
    setSearchTerm(value);
  };

  // Manejar la eliminación de un vehículo
  const handleDelete = (id) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este vehículo?");
    if (confirmacion) {
      eliminar(id);
    }
  };

  return {
    filteredVehicles,
    searchTerm,
    updateSearchTerm,
    handleDelete,
  };

}