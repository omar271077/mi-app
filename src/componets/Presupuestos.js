import React, { useState } from 'react';


import './Presupuestos.css';

const Presupuestos = () => {
    

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaEvento, setFechaEvento] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState('');
  const [conSalon, setConSalon] = useState(false);
  const [tipoComida, setTipoComida] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      nombre,
      telefono,
      correo,
      fechaEvento,
      cantidadPersonas,
      conSalon,
      tipoComida,
    };
    console.log('Nueva Tarea:', nuevaTarea);

    setTareas([...tareas, nuevaTarea]);

    alert('Presupuesto enviado correctamente');

    setNombre('');
    setTelefono('');
    setCorreo('');
    setFechaEvento('');
    setCantidadPersonas('');
    setConSalon(false);
    setTipoComida('');
    
  };
  

  return (
    <div className="presupuestos-container">
      <h2>Solicitar Presupuesto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </label>
        <br />
        <label>
          Correo:
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </label>
        <br />
        <label>
          Fecha del Evento:
          <input type="date" value={fechaEvento} onChange={(e) => setFechaEvento(e.target.value)} />
        </label>
        <br />
        <label>
          Cantidad de Personas:
          <input
            type="number"
            value={cantidadPersonas}
            onChange={(e) => setCantidadPersonas(e.target.value)}
          />
        </label>
        <br />
        <label>
          ¿Con Salón?
          <input
            type="checkbox"
            checked={conSalon}
            onChange={(e) => setConSalon(e.target.checked)}
          />
        </label>
        <br />
        <label>
          Tipo de Comida:
          <select value={tipoComida} onChange={(e) => setTipoComida(e.target.value)}>
            <option value="">Selecciona...</option>
            <option value="desayuno">Desayuno</option>
            <option value="almuerzo">Almuerzo</option>
            <option value="cena">Cena</option>
          </select>
        </label>
        <br />
        <button type="submit">Enviar Presupuesto</button>
      </form>

      
    </div>
  );
};

export default Presupuestos;

