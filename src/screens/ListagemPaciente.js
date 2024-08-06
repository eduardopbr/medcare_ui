import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PatientsList = () => {
  const [pacientes, setPaciente] = useState([]);

  useEffect(() => { 
    console.log('Iniciando a requisição para a API...');
    fetch('https://localhost:7186/api/paciente/todos')
      .then(response => {
        console.log('Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setPaciente(data);
      })
      .catch(error => console.error('Falha ao obter todos os pacientes:', error));
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <Link to="/cadastrar-paciente">
          <button style={styles.button}>Adicionar Paciente</button>
        </Link>
      </div>
      <div style={styles.gridContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map(paciente => (
              <tr key={paciente.id}>
                <td>{paciente.id}</td>
                <td>{paciente.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '25px',
    fontFamily: 'Arial, sans-serif',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  gridContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  table: {
    width: '80%',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    paddingTop: '5px'
  },
  td: {
    border: '1px solid #ddd',
    padding: '15px',
    textAlign: 'left',
  },
  tr: {
    '&:nth-child(even)': {
      backgroundColor: '#f2f2f2',
    },
  },
};

export default PatientsList;
