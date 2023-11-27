import React from 'react';
import ListaDeEventos from '../components/ListaDeEventos';  // Importa ListaDeEventos

const ListaDeEventosPage = ({ eventos, eliminarEvento }) => {
  return (
    <div>
      <h2>Lista de Eventos</h2>
      {/* Renderiza el componente ListaDeEventos con los eventos y la función para eliminar eventos */}
      <ListaDeEventos eventos={eventos} eliminarEvento={eliminarEvento} />
    </div>
  );
};

export default ListaDeEventosPage;
