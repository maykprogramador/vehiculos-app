import { useEffect, useState } from 'react';
import vehiclesData from '../mocks/vehicles-prueba.json';

export function useVehiculos() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const almacenados = JSON.parse(localStorage.getItem('vehiculos')) || vehiclesData;
    setVehiculos(almacenados);
  }, []);

  useEffect(() => {
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
  }, [vehiculos]);

  const agregarVehiculo = (vehiculo) => {
    setVehiculos((prev) => [...prev, vehiculo]);
  };

  const eliminarVehiculo = (id) => {
    console.log("id", id);
    setVehiculos((prev) => prev.filter((v) => v.id !== id));
  };

  return {
    vehiculos,
    agregarVehiculo,
    eliminarVehiculo,
  };
}
