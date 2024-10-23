import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.text}>Oops! La page que vous recherchez n'existe pas.</p>
      <Link to="/" style={styles.link}>
        Retour à l'accueil
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '72px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '24px',
    marginBottom: '30px',
  },
  link: {
    fontSize: '20px',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default NotFound;
