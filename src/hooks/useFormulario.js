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
      ...prev, // mantiene todo el objeto anterior
      datos: {
        ...prev.datos, // mantiene las otras secciones
        [seccion]: {
          ...prev.datos[seccion],  // mantiene los otros campos de esa sección
          [campo]: valor, // actualiza el campo con el nuevo valor
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

    const camposIncompletos = Object.entries(formulario.datos).some(([_, campos]) => // verifica si hay campos vacíos
      // Object.entries devuelve un array de pares [clave, valor], y luego verificamos si alguno de los valores está vacío
      Object.values(campos).some((valor) => !valor.trim()) // trim elimina espacios en blanco al inicio y al final
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
