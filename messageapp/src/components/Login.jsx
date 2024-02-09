import React, { useState, useContext } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Context } from './Context';
import { projectId } from './Constants';
import { PersonObject } from 'react-chat-engine-advanced';

const Login = (props) => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Hooks
  const { setUser } = useContext(Context);

  const onSubmit = (event) => {
    event.preventDefault();

    const headers = {
      'Project-ID': projectId,
      'User-Name': email,
      'User-Secret': password,
    };

    axios
      .get('https://api.chatengine.io/users/me/', {
        headers,
      })
      .then((response) => {
        if (response.status === 200) {
          const user = {
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: email,
            username: email,
            secret: password,
            avatar: response.data.avatar,
            custom_json: {},
            is_online: true,
          };
          setUser(user);
        }
      })
      .catch((error) => console.log('Error', error));
  };

  return (
    <div>
      <div className="form-title">Welcome Back</div>

      <div className="form-subtitle">
        New here? <Link onClick={() => props.onHasNoAccount()}>Sign Up</Link>
      </div>

      <form onSubmit={onSubmit}>
        <TextField
          label="Email"
          name="email"
          placeholder="adam@lamorre.co"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
