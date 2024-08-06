import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <Link to="/paciente">
        <button style={styles.button}>Listar Pacientes</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default Home;
