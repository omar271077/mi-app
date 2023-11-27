import React, { useState } from 'react';
import './testimonios.css';

const Testimonio = ({ agregarTestimonio }) => {
  const [nombre, setNombre] = useState('');
  const [texto, setTexto] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoTestimonio = {
      nombre,
      texto,
      imagen,
    };

    // Llama a la función proporcionada por el componente superior para agregar el testimonio
    agregarTestimonio(nuevoTestimonio);

    alert('Testimonio agregado correctamente');

    // Limpia los campos después de agregar el testimonio
    setNombre('');
    setTexto('');
    setImagen('');
  };

  return (
    <div className="testimonio-container">
      <h2>Comparte tu Testimonio</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Texto:
          <textarea value={texto} onChange={(e) => setTexto(e.target.value)} />
        </label>
        <br />
        <label>
          Imagen (URL):
          <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Testimonio</button>
      </form>
    </div>
  );
};

export default Testimonio;
