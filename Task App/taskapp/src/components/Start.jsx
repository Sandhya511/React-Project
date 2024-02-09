// import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const paperStyles = {
  borderRadius: '0px',
  marginTop: '0px',
  marginBottom: '0px',
  width: '100vw',
  height: '100vh',
  padding: '20px',
  backgroundColor: 'transparent', // Change background color to transparent
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url("../bg.png")', // Set background image
  backgroundSize: 'cover', // Ensure the background image covers the entire container
  backgroundPosition: 'center', // Center the background image
};

const imgStyles = {
  maxWidth: '60%',
  maxHeight: '60%',
};
const buttonStyles = {
  marginTop: '20px',
  transition: 'background-color 0.3s',
  backgroundColor: '#58C1A6 ', // Change to the desired color
};

const hoverStyles = {
  '&:hover': {
    backgroundColor: 'orange',
  },
};


export default function Start() {
  return (
    <div>
      <Paper style={paperStyles}>
        <img src='../task.png' alt='Task Image' style={imgStyles} />
        <Button variant="contained"color="primary"size="large"style={{ ...buttonStyles, ...hoverStyles }}>
          Start
        </Button>
      </Paper>
    </div>
  );
}
