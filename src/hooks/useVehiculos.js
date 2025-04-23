import { useEffect, useState } from 'react';

export function useVehiculos() {
  const [vehiculos, setVehiculos] = useState([
    
  ]);

  useEffect(() => {
    const almacenados= [
      {
        id: "ABC123",
        datos: {
          vehiculo: { placa: "ABC123", marca: "Toyota", modelo: "Corolla", año: "2020" },
          propietario: { nombre: "Juan Pérez", documento: "1001234567", telefono: "3001234567", email: "juanperez@example.com" },
          tenedor: { nombre: "Laura Gómez", documento: "1007654321", telefono: "3019876543", email: "laura@example.com" },
          conductor: { nombre: "Carlos Ruiz", documento: "1034567890", telefono: "3023456789", email: "carlosr@example.com" }
        }
      },
      {
        id: "XYZ789",
        datos: {
          vehiculo: { placa: "XYZ789", marca: "Chevrolet", modelo: "Spark", año: "2018" },
          propietario: { nombre: "Ana Torres", documento: "1102233445", telefono: "3123456789", email: "ana.torres@example.com" },
          tenedor: { nombre: "Pedro Méndez", documento: "1105566778", telefono: "3138765432", email: "pedro@example.com" },
          conductor: { nombre: "Sofía Martínez", documento: "1045678901", telefono: "3149876543", email: "sofia@example.com" }
        }
      },
      {
        id: "LMN456",
        datos: {
          vehiculo: { placa: "LMN456", marca: "Nissan", modelo: "Versa", año: "2019" },
          propietario: { nombre: "Carlos Jiménez", documento: "1209988776", telefono: "3201234567", email: "carlosj@example.com" },
          tenedor: { nombre: "Elena Ríos", documento: "1212345678", telefono: "3218765432", email: "elena@example.com" },
          conductor: { nombre: "Andrés Salazar", documento: "1223456789", telefono: "3229876543", email: "andres@example.com" }
        }
      },
      {
        id: "QRS321",
        datos: {
          vehiculo: { placa: "QRS321", marca: "Kia", modelo: "Rio", año: "2021" },
          propietario: { nombre: "Marta Lozano", documento: "1301122334", telefono: "3301234567", email: "marta@example.com" },
          tenedor: { nombre: "Julián Cárdenas", documento: "1304455667", telefono: "3318765432", email: "julian@example.com" },
          conductor: { nombre: "Natalia Herrera", documento: "1334567890", telefono: "3329876543", email: "natalia@example.com" }
        }
      }
    ];
    
    localStorage.setItem('vehiculos', JSON.stringify(almacenados));
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
