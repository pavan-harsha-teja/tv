import React from 'react';
import img from '../Assests/DAD.jpg'
const TVMechanic = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>TV Mechanic</h1>
        <p style={styles.info}>
          Owned by: <strong>Srinivasarao</strong>
        </p>
        <img
          src={img} // Place DAD.jpg inside your public folder
          alt="TV Shop"
          style={styles.image}
        />
        <p style={styles.info}>Services: TV Repair, Installation, Maintenance</p>
        <p style={styles.info}>Location: Near Navaranga Bakery, Macherla</p>
        <div style={styles.contact}>
          <p>Call us at: <strong>+91-8341751105</strong></p>
          <a href="tel:+91-8341751105" style={styles.button}>
            📞 Call Now
          </a>
          <br />
          <a
            href="https://wa.me/918341751105"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.button, marginTop: '10px' }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    background: '#f0f2f5',
    margin: 0,
    padding: '40px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '600px',
    margin: 'auto',
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    color: '#333',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '8px',
    margin: '20px 0',
  },
  info: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  contact: {
    marginTop: '10px',
  },
  button: {
    display: 'inline-block',
    marginTop: '10px',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default TVMechanic;
