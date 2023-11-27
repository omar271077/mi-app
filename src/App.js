// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Inicio from './componets/Inicio';
import Presupuestos from './componets/Presupuestos';
import Testimonios from './componets/Testimonios';
import Lista from './componets/listadetarea';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Inicio} />
        <Route path="/presupuestos" Component={Presupuestos} />
        <Route path="/testimonios" Component={Testimonios} />
        <Route path="/tarea" Component={Lista} />
      </Routes>
    </Router>
  );
};

export default App;