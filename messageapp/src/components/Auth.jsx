import React, { useState } from 'react';
// import { CSSProperties } from 'react';
// import valley from '../assets/valley.jpeg';
// import SignUpForm from './SignUpForm';
// import LogInForm from './LogInForm';
import Login from './Login';
import { Button, Container, CssBaseline, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Signup from './Signup';

const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    backgroundImage: `url('../wp.jpeg')`,
    height: '100vh',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundGradient: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    width: '100%',
    height: '100%',
  },
  formContainer: {
    width: '100%',
    maxWidth: '650px',
    padding: '36px 72px',
    [theme.breakpoints.down('sm')]: {
      padding: '36px 24px',
    },
  },
  title: {
    fontSize: '24px',
    fontFamily: 'VisbyRoundCF-Heavy',
    letterSpacing: '0.5px',
    color: 'white',
    paddingBottom: '11vw',
  },
  switchButton: {
    color: 'white',
    marginTop: theme.spacing(2),
  },
}));

const Auth = () => {
  const classes = useStyles();
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className={classes.backgroundContainer}>
      <div className={classes.backgroundGradient}>
        <Container component="main" maxWidth="sm" className={classes.formContainer}>
          <CssBaseline />
          <Typography component="div" className={classes.title}>
            Pretty
          </Typography>

          {hasAccount ? <Login onHasNoAccount={() => setHasAccount(false)} /> : <Signup onHasAccount={() => setHasAccount(true)} />}

          <Button className={classes.switchButton} onClick={() => setHasAccount(!hasAccount)}>
            {hasAccount ? 'Don\'t have an account? Sign Up' : 'Already have an account? Log In'}
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Auth;
