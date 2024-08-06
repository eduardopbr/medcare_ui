import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const handleAddPatient = () => {
    fetch('http://localhost:5000/api/paciente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nome }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Paciente cadastrado:', data);
        navigate('/paciente');
      })
      .catch(error => console.error('Error adding patient:', error));
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        placeholder="Nome do Paciente"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <button style={styles.button} onClick={handleAddPatient}>Adicionar</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default AddPatient;
