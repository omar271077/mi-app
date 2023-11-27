// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que usarás React Router
import './Navbar.css'; // Importa el archivo de estilos

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/presupuestos">Presupuestos</Link></li>
        <li><Link to="/testimonios">Testimonios</Link></li>
        <li><Link to="/tarea">Lista de Eventos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
