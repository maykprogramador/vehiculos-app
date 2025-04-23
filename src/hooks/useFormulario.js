import { useState } from 'react';

export function useFormulario(onAgregar) {
  const [formulario, setFormulario] = useState({
    datos: {
      vehiculo: { placa: '', marca: '', modelo: '', año: '' },
      propietario: { nombre: '', documento: '', telefono: '', email: '' },
      tenedor: { nombre: '', documento: '', telefono: '', email: '' },
      conductor: { nombre: '', documento: '', telefono: '', email: '' },
    },
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

  const resetFormulario = () => {
    setFormulario({
      datos: {
        vehiculo: { placa: '', marca: '', modelo: '', año: '' },
        propietario: { nombre: '', documento: '', telefono: '', email: '' },
        tenedor: { nombre: '', documento: '', telefono: '', email: '' },
        conductor: { nombre: '', documento: '', telefono: '', email: '' },
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const camposIncompletos = Object.entries(formulario.datos).some(([_, campos]) =>
      Object.values(campos).some((valor) => !valor.trim())
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
    alert('Vehículo registrado exitosamente!');
  };

  return {
    formulario,
    handleChange,
    handleSubmit,
  };
}
