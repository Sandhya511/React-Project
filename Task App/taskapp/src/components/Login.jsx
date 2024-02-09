import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

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
  backgroundColor: '#58C1A6',
  width: '80px', 
};

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: `url('../bg1.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    // Add your login logic here
    console.log('Logging in...');
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear error if any
    setError('');
  };

  return (
    <div style={containerStyles}>
      <Paper elevation={3} style={paperStyles}>
        <h2>LOGIN</h2>
        {error && <Alert severity="error">{error}</Alert>}
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
        <Button style={buttonStyles} variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </div>
  );
}
