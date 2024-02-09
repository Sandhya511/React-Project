import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const paperStyles = {
  borderRadius: '15px',
  marginTop: '100px',
  marginBottom: '100px',
  width: '400px',
  padding: '20px',
  backgroundColor: '#f5f5f5',
};
const buttonStyles = {
  marginTop: '20px',
  transition: 'background-color 0.3s',
  backgroundColor: '#58C1A6 ',
  width: '80px', 
};

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: `url('../bg1.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  };

  const handleSignUp = () => {
    // Basic validation
    if (!username || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one digit.');
      return;
    }

    // Add your sign-up logic here
    console.log('Signing up...');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear error if any
    setError('');
  };

  return (
    <div style={containerStyles}>
      <Paper elevation={3} style={paperStyles}>
        <h2>SIGN UP</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button style={{ ...buttonStyles, width: '100%' }} variant="contained" color="primary" fullWidth onClick={handleSignUp}>
          Sign Up
        </Button>
      </Paper>
    </div>
  );
}
