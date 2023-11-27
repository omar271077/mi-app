// Comidas.js
import React from 'react';
import './Comidas.css'; // Importa el archivo de estilos específico para la sección de comidas

const Comidas = () => {
  return (
    <div className="comidas-container">
      <h2>Comidas </h2>
      <img src="https://blog.contraelcancer.es/wp-content/uploads/2020/03/iStock-1017706758-mod.jpg" alt="Comidas del evento" className="comidas-imagen" />
      <p className="comidas-texto">
        Disfruta de una exquisita selección de platos preparados por nuestros chefs expertos.
      </p>
    </div>
  );
};

export default Comidas;
