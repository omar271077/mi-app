import React, { useState } from 'react';
import Testimonio from './testimonio/Testimonios';


const App = () => {
  const [testimonios, setTestimonios] = useState([]);

  const agregarTestimonio = (nuevoTestimonio) => {
    setTestimonios([...testimonios, nuevoTestimonio]);
  };

  return (
    <div>
      <Testimonio agregarTestimonio={agregarTestimonio} />
      {/* Aquí podrías renderizar o mostrar los testimonios almacenados */}
      <div className="testimonios-container">
        <h2>Testimonios:</h2>
        <ul>
          {testimonios.map((testimonio, index) => (
            <li key={index}>
              <strong>{testimonio.nombre}</strong>: {testimonio.texto}
              <br />
              <img src={testimonio.imagen} alt={testimonio.nombre} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
