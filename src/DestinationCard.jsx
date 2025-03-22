/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function DestinationCard({ destination }) {
  return (
    <div style={styles.card}>
      <img src={destination.image} alt={destination.name} style={styles.image} />
      <div style={styles.content}>
        <h1 style={styles.title}>{destination.name}</h1>
        <h4 style={styles.location}>{destination.location}</h4>
        <p style={styles.description}>{destination.description}</p>
        <p style={styles.price}>Price: {destination.price}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '300px',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '20px',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  content: {
    padding: '15px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '8px',
    color: '#333'
  },
  location: {
    fontSize: '16px',
    marginBottom: '12px',
    color: '#777'
  },
  description: {
    fontSize: '14px',
    marginBottom: '12px',
    color: '#555'
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2c3e50'
  }
};

export default DestinationCard;
