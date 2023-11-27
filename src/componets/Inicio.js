// Inicio.js
import React from 'react';
import Comidas from './Comidas';

const inicio = () => {
   console.log("hola");
    return (
    <div>
      <h2>Página de Inicio </h2>
      {/* Contenido de la página de inicio */}
      < Comidas />
    </div>
  );
};

export default inicio;