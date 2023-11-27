import React from 'react';
import Tareas from  './Presupuestos'
const Lista = ({ tareas }) => {
    
    return (
    <div>
      
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas && tareas.map((tarea, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {tarea.nombre},
             <strong>Fecha del Evento:</strong> {tarea.fechaEvento},{' '}
            <strong>Cantidad de Personas:</strong> {tarea.cantidadPersonas},
             <strong>Con Salón:</strong>{' '}  {tarea.conSalon ? 'Sí' : 'No'}, 
           
            <strong>Tipo de Comida:</strong> {tarea.tipoComida}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
