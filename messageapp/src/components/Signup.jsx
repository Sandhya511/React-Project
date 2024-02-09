// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { Mobile } from '.Mobile';
// import { Context } from './Context';
// import { privateKey } from './Constants';
// import TextInput from './components/TextInput';
// import PhotoInput from './components/PhotoInput';
// import Button from './components/Button';
// import Link from './components/Link';
// import { PersonObject } from 'react-chat-engine-advanced';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   formTitle: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '16px',
//   },
//   formSubtitle: {
//     fontSize: '14px',
//     color: theme.palette.text.secondary,
//     marginBottom: '16px',
//   },
//   formInput: {
//     marginBottom: '16px',
//     width: '100%',
//   },
//   photoInput: {
//     marginBottom: '16px',
//     width: '100%',
//   },
//   submitButton: {
//     width: '100%',
//     float: 'right',
//   },
// }));

// const Signup = (props) => {
//   const classes = useStyles();
//   const { setUser } = useContext(Context);
//   const isMobile = Mobile();

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [avatar, setAvatar] = useState(undefined);

//   const onSubmit = (event) => {
//     event.preventDefault();

//     const userJson = {
//       email: email,
//       username: email,
//       first_name: firstName,
//       last_name: lastName,
//       secret: password,
//       avatar: null,
//       custom_json: {},
//       is_online: true,
//     };

//     const formData = new FormData();
//     formData.append('email', email);
//     formData.append('username', email);
//     formData.append('first_name', firstName);
//     formData.append('last_name', lastName);
//     formData.append('secret', password);
//     if (avatar) {
//       formData.append('avatar', avatar, avatar.name);
//     }

//     const headers = { 'Private-Key': privateKey };

//     axios
//       .post('https://api.chatengine.io/users/', formData, {
//         headers,
//       })
//       .then((response) => {
//         if (response.status === 201) {
//           userJson.avatar = response.data.avatar;
//           setUser(userJson);
//         }
//       })
//       .catch((error) => console.log('Error', error));
//   };

//   return (
//     <div className={classes.formContainer}>
//       <div className={classes.formTitle}>Create an account</div>

//       <div className={classes.formSubtitle}>
//         Already a member? <Link onClick={props.onHasAccount}>Log in</Link>
//       </div>

//       <form onSubmit={onSubmit}>
//         <TextInput
//           className={classes.formInput}
//           label="First name"
//           name="first_name"
//           placeholder="Adam"
//           style={{ width: isMobile ? '100%' : 'calc(50% - 6px)' }}
//           onChange={(e) => setFirstName(e.target.value)}
//         />

//         <TextInput
//           className={classes.formInput}
//           label="Last name"
//           name="last_name"
//           placeholder="La Morre"
//           style={{
//             width: isMobile ? '100%' : 'calc(50% - 6px)',
//             float: 'right',
//           }}
//           onChange={(e) => setLastName(e.target.value)}
//         />

//         <TextInput
//           className={classes.formInput}
//           label="Email"
//           name="email"
//           placeholder="adam@lamorre.co"
//           style={{ width: isMobile ? '100%' : 'calc(50% - 6px)' }}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <TextInput
//           className={classes.formInput}
//           label="Password"
//           name="password"
//           placeholder="********"
//           type="password"
//           style={{
//             width: isMobile ? '100%' : 'calc(50% - 6px)',
//             float: 'right',
//           }}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <PhotoInput
//           className={classes.photoInput}
//           label="Profile picture"
//           name="avatar"
//           id="avatar-picker"
//           style={{ width: isMobile ? '100%' : 'calc(50% - 6px)' }}
//           onChange={(e) => {
//             if (e.target.files !== null) {
//               setAvatar(e.target.files[0]);
//             }
//           }}
//         />

//         <Button
//           className={classes.submitButton}
//           type="submit"
//         >
//           Sign Up
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useHistory, BrowserRouter as Router } from 'react-router-dom';
import TextInput from './components/TextInput';
import PhotoInput from './components/PhotoInput';
import Button from '@mui/material/Button';
import { Context } from './Context';
import { privateKey } from './Constants';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  formTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  formSubtitle: {
    fontSize: '14px',
    color: theme.palette.text.secondary,
    marginBottom: '16px',
  },
  formInput: {
    marginBottom: '16px',
    width: '100%',
  },
  photoInput: {
    marginBottom: '16px',
    width: '100%',
  },
  submitButton: {
    width: '100%',
    float: 'right',
  },
}));

const Signup = () => {
  const classes = useStyles();
  const { setUser } = useContext(Context);
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(undefined);

  const onSubmit = (event) => {
    event.preventDefault();

    const userJson = {
      email: email,
      username: email,
      first_name: firstName,
      last_name: lastName,
      secret: password,
      avatar: null,
      custom_json: {},
      is_online: true,
    };

    const formData = new FormData();
    formData.append('email', email);
    formData.append('username', email);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('secret', password);
    if (avatar) {
      formData.append('avatar', avatar, avatar.name);
    }

    const headers = { 'Private-Key': privateKey };

    axios
      .post('https://api.chatengine.io/users/', formData, {
        headers,
      })
      .then((response) => {
        if (response.status === 201) {
          userJson.avatar = response.data.avatar;
          setUser(userJson);
          // Redirect to another page after successful signup
          history.push('/dashboard');
        }
      })
      .catch((error) => console.log('Error', error));
  };

  return (
    <Router>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>Create an account</div>

        <div className={classes.formSubtitle}>
          Already a member? <Link to="/login">Log in</Link>
        </div>

        <form onSubmit={onSubmit}>
          <TextInput
            className={classes.formInput}
            label="First name"
            name="first_name"
            placeholder="Adam"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextInput
            className={classes.formInput}
            label="Last name"
            name="last_name"
            placeholder="La Morre"
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextInput
            className={classes.formInput}
            label="Email"
            name="email"
            placeholder="adam@lamorre.co"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            className={classes.formInput}
            label="Password"
            name="password"
            placeholder="********"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <PhotoInput
            className={classes.photoInput}
            label="Profile picture"
            name="avatar"
            id="avatar-picker"
            onChange={(e) => {
              if (e.target.files !== null) {
                setAvatar(e.target.files[0]);
              }
            }}
          />

          <Button className={classes.submitButton} type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </Router>
  );
};

export default Signup;
