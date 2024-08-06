import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home';
import PatientsList from './screens/ListagemPaciente';
import AddPatient from './screens/CadastroPaciente';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paciente" element={<PatientsList />} />
          <Route path="/cadastrar-paciente" element={<AddPatient />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
