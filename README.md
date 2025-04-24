# 🚗 Plataforma de Registro de Vehículos

Este proyecto es una aplicación web básica construida con React. Permite registrar, visualizar y eliminar vehículos, incluyendo información de propietario, tenedor y conductor. Los datos se almacenan localmente en el navegador usando localStorage y datos mock (simulados).

---

## 🧰 Tecnologías utilizadas

- ⚛️ React (con functional components y hooks)
- 🧠 Custom Hooks (useVehiculos)
- 🛣️ React Router
- 💨 Tailwind CSS
- 🧪 Datos mock en JSON
- 🗃️ Persistencia en localStorage

---

## 🚀 ¿Cómo ejecutar este proyecto?

Sigue estos pasos para ejecutarlo localmente:

1. Clona este repositorio:

-git clone https://github.com/maykprogramador/vehiculos-app.git

-cd vehiculos-app

2. Instala las dependencias:

-npm install

3. Inicia el servidor de desarrollo:

-npm run dev


4. Abre en tu navegador:

-http://localhost:5173


---

## 📂 Estructura del proyecto

src/
  components/
    FormularioVehiculo.jsx
    ListaVehiculos.jsx
    VehiculoCard.jsx
   css/
     App.css
     form-animations.css
     form-styles.css
   hooks/
     useVehiculos.js
     useFormulario.js
     useVehiculos.js
   mocks/
     mocks/vehicles-prueba.json
   App.jsx
   main.jsx
   index.css

---

## 📝 Características principales

- Añadir un nuevo vehículo con sus datos relacionados.
- Visualizar la lista de vehículos registrados.
- Eliminar vehículos individualmente.
- Persistencia de datos en localStorage.
- Diseño responsivo y moderno con Tailwind CSS.
- Navegación con React Router entre vistas.

---

## 👨‍💻 Autor

- Desarrollado por Maykol Stiveen Plaza Castrillon como prueba técnica.
- Portafolio / GitHub: https://github.com/maykprogramador
