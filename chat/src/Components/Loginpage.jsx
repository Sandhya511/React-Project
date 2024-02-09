import React from 'react';
import { Container, Paper, Typography, TextField, Button, Grid } from '@mui/material';

const textFieldStyles = {
  width: '90%',
  padding: '10px',
  '& .MuiFilledInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
  },
};

const buttonStyles = {
  width: '100px',
  height: '40px',
  padding: '10px',
  margin: '30px',
  marginBottom: '10px',
};

const leftContainerStyles = {
  backgroundColor: 'white',
  height: '99vh',
  width: '35%',
};

const rightContainerStyles = {
  backgroundColor: '#F0DC12',
  height: '99vh',
  width: '65%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const paperStyles = {
  borderRadius: '15px',
  marginTop: '50px',
  width: '400px',
  padding: '20px',
  height: '480px',
  margin: '0',
  backgroundColor: '#DEDDD0',
  transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    border: '3px solid #0D066A ',
    boxShadow: '0px 0px 30px  #6A064A ',
  },
};
const imageStyles = {
    width: '100px', // Adjust the width as needed
    height: '30px', // Maintain aspect ratio
    margin: '5px',
  };

export default function Loginpage() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        {/* Left Side */}
        <Grid item style={leftContainerStyles}>
          <img src="../icon.jpg" alt="Centered " style={{ width: '80%', height: 'auto' }} />
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          </div>
        </Grid>

        {/* Right Side */}
        <Grid item style={rightContainerStyles}>
          <Paper elevation={3} sx={paperStyles}>
            <Typography component="h1" variant="h5">
              <h3>CHATING'</h3>
              <h6>Login to Embrace Conversations Beyond Text!</h6>
            </Typography>
            <form>
              <div>
                <TextField sx={textFieldStyles} id="filled-basic" variant="filled" label="Mobile Number" />
                <TextField sx={textFieldStyles} id="filled-basic" variant="filled" label="Password" />
              </div>
              <div>
                <Button sx={buttonStyles} type="submit" fullWidth variant="contained" color="primary">
                  LOGIN
                </Button>
              </div>
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <Typography variant="body2">Don't have an account?</Typography>
                <Typography variant="body2">SIGN UP</Typography>
              </div>
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                {/* <Typography variant="body2">Get the app on Google Play</Typography> */}
                <img src='../download.png' alt="gplay" style={imageStyles}></img>
                <img src='../images.png' alt="app" style={imageStyles}></img>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
