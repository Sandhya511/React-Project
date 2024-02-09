// // // import React from 'react';
// // // import { Container, Paper, Grid,List,ListItem,
// // //  Typography,  TextField,ListItemAvatar,Avatar,ListItemText,Divider, AppBar } from '@mui/material';
// // //  import SendIcon from '@mui/icons-material/Send';
// // //  import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// // //  import AttachFileIcon from '@mui/icons-material/AttachFile';
// // // const typoStyles = {
// // //   display: 'inline',
// // //   component: 'span',
// // //   variant: 'body2',
// // //   color: 'text.primary',
// // //   height:'15px'
// // // };



// // // const leftContainerStyles = {
// // //   backgroundColor: 'white',
// // //   height: '99vh',
// // //   // width: '3%', // Adjust the height as needed
// // // };

// // // const rightContainerStyles = {
// // //   backgroundColor: '#F0DC12',
// // //   height: '95vh',
// // //   width: '100%', // Adjust the height as needed
// // //   display: 'flex',
// // //   justifyContent: 'flex-start', // Align content to the left
// // //   alignItems: 'left',
// // //   marginTop: '40px',
// // // };

// // // const paperStyles = {
// // //   borderRadius: '15px',
// // //   marginTop: '20px',
// // //   marginBottom:'2px',
// // //   width: '370px',
// // //   padding: '20px',
// // //   height: '400px',
// // //   marginLeft: '20px', // Adjust the left margin as needed
// // //   backgroundColor: '#F8F2F6',
// // // };
// // // const paperStyle = {
// // //   borderRadius: '15px',
// // //   marginTop: '35px',
// // //   width: '370px',
// // //   padding: '20px',
// // //   height: '15px',
// // //   marginLeft: '20px', // Adjust the left margin as needed
// // //   backgroundColor: '#F8F2F6',
  
// // // };

// // // const Style = {
// // //   padding :'10px',
// // //   margin:'10px',
// // //   width:'700px'
// // // }
// // // const handleSendMessage = (text, sender) => {
// // //   const newMessage = {
// // //     id: messages.length + 1,
// // //     text: text,
// // //     sender: sender,
// // //   };

// // //   setMessages([...messages, newMessage]);
// // // };


// // // export default function Home() {
// // //   return (
// // //     <Container maxWidth="lg">
// // //       <Grid container flexDirection={'row'}>
// // //         {/* Left Side */}
// // //         <Grid item style={leftContainerStyles}>
// // //           <div
// // //             style={{
// // //               width: '100%',
// // //               height: '100%',
// // //               display: 'flex',
// // //               flexDirection: 'column',
// // //               justifyContent: 'center',
// // //               alignItems: 'center',
// // //             }}
// // //           ></div>
          
// // //         </Grid>

// // //         {/* Right Side */}
        
// // //         <Grid item style={rightContainerStyles} spacing={2} justifyContent="left" alignItems="left" flexDirection={'row'}>
// // //           <Grid flexDirection={'column'}>
// // //           <Paper sx={paperStyle}><body>search</body></Paper>
// // //           <Paper elevation={3} sx={paperStyles}>
// // //                 <List sx={{ width: '100%', maxWidth: 360,maxHeight:400, bgcolor: 'background.paper' ,overflow:'auto'}}>
// // //                     <ListItem alignItems="flex-start">
// // //                         <ListItemAvatar>
// // //                             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
// // //                         </ListItemAvatar>
// // //                     <ListItemText
// // //                     primary="Brunch this weekend?"
// // //                     secondary={
// // //                     <React.Fragment>
// // //                     <Typography
// // //                         sx={typoStyles}>
// // //                         Ali Connors
// // //                     </Typography>
// // //                     {" — I'll be in your neighborhood doing errands this…"}
// // //                     </React.Fragment>
// // //                 }
// // //                 />
// // //                 </ListItem>
// // //                 <Divider variant="inset" component="li" />
// // //                 <ListItem alignItems="flex-start">
// // //                     <ListItemAvatar>
// // //                     <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
// // //                     </ListItemAvatar>
// // //                     <ListItemText
// // //                     primary="Summer BBQ"
// // //                     secondary={
// // //                         <React.Fragment>
// // //                         <Typography
// // //                             sx={typoStyles}
// // //                         >
// // //                             to Scott, Alex, Jennifer
// // //                         </Typography>
// // //                         {" — Wish I could come, but I'm out of town this…"}
// // //                         </React.Fragment>
// // //                     }
// // //                     />
// // //                 </ListItem>
// // //                 <Divider variant="inset" component="li" />
// // //                 <ListItem alignItems="flex-start">
// // //                     <ListItemAvatar>
// // //                     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
// // //                     </ListItemAvatar>
// // //                     <ListItemText
// // //                     primary="Oui Oui"
// // //                     secondary={
// // //                         <React.Fragment>
// // //                         <Typography
// // //                             sx={typoStyles}
// // //                         >
// // //                             Sandra Adams
// // //                         </Typography>
// // //                         {' — Do you have Paris recommendations? Have you ever…'}
// // //                         </React.Fragment>
// // //                     }
// // //                     />
// // //                 </ListItem>
// // //                 <Divider variant="inset" component="li" />
// // //                 <ListItem alignItems="flex-start">
// // //                     <ListItemAvatar>
// // //                     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
// // //                     </ListItemAvatar>
// // //                     <ListItemText
// // //                     primary="Oui Oui"
// // //                     secondary={
// // //                         <React.Fragment>
// // //                         <Typography
// // //                             sx={typoStyles}
// // //                         >
// // //                             Sandra Adams
// // //                         </Typography>
// // //                         {' — Do you have Paris recommendations? Have you ever…'}
// // //                         </React.Fragment>
// // //                     }
// // //                     />
// // //                 </ListItem>
// // //                 <Divider variant="inset" component="li" />
// // //                 <ListItem alignItems="flex-start">
// // //                     <ListItemAvatar>
// // //                     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
// // //                     </ListItemAvatar>
// // //                     <ListItemText
// // //                     primary="Oui Oui"
// // //                     secondary={
// // //                         <React.Fragment>
// // //                         <Typography
// // //                             sx={typoStyles}
// // //                         >
// // //                             Sandra Adams
// // //                         </Typography>
// // //                         {' — Do you have Paris recommendations? Have you ever…'}
// // //                         </React.Fragment>
// // //                     }
// // //                     />
// // //                 </ListItem>
                
// // //                         </List>
// // //           </Paper>
// // //           </Grid>
// // //           <Grid sx={Style}>
// // //           <Paper style={{ height: '440px', overflowY: 'auto',marginTop:'20px' }}>
// // //               <AppBar style={{ backgroundColor: 'black', color: 'black' }}/>
// // //             </Paper>
// // //           <Paper style={{ padding: '10px', marginTop: '10px',height:'35px' }}>
// // //               <Grid container spacing={1} alignItems="center">
// // //                 <Grid item >
// // //                   <InsertEmoticonIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D',marginTop:'4px' }}/>
// // //                   <AttachFileIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D',marginTop:'4px' }} />
// // //                   <TextField style={{width:'530px',height:'25px',marginLeft:'5px'}}size="small"/>
// // //                   <SendIcon style={{ fontSize: '30px', marginLeft: '15px', color: '#00151D',marginTop:'4px' }} />
      
// // //                 </Grid>
// // //               </Grid>
// // //             </Paper>
// // //             </Grid>
// // //         </Grid>
// // //       </Grid>
// // //     </Container>
// // //   );
// // // }

// // import React, { useState } from 'react';
// // import {
// //   Container,
// //   Paper,
// //   Grid,
// //   List,
// //   ListItem,
// //   Typography,
// //   TextField,
// //   ListItemAvatar,
// //   Avatar,
// //   ListItemText,
// //   Divider,
// //   AppBar,
// // } from '@mui/material';
// // import SendIcon from '@mui/icons-material/Send';
// // import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// // import AttachFileIcon from '@mui/icons-material/AttachFile';

// // const typoStyles = {
// //   display: 'inline',
// //   component: 'span',
// //   variant: 'body2',
// //   color: 'text.primary',
// //   height: '15px',
// // };

// // const leftContainerStyles = {
// //   backgroundColor: 'white',
// //   height: '99vh',
// // };

// // const rightContainerStyles = {
// //   backgroundColor: '#F0DC12',
// //   height: '95vh',
// //   width: '100%',
// //   display: 'flex',
// //   justifyContent: 'flex-start',
// //   alignItems: 'left',
// //   marginTop: '40px',
// // };

// // const paperStyles = {
// //   borderRadius: '15px',
// //   marginTop: '20px',
// //   marginBottom: '2px',
// //   width: '370px',
// //   padding: '20px',
// //   height: '400px',
// //   marginLeft: '20px',
// //   backgroundColor: '#F8F2F6',
// // };

// // const paperStyle = {
// //   borderRadius: '15px',
// //   marginTop: '35px',
// //   width: '370px',
// //   padding: '20px',
// //   height: '15px',
// //   marginLeft: '20px',
// //   backgroundColor: '#F8F2F6',
// // };

// // const Style = {
// //   padding: '10px',
// //   margin: '10px',
// //   width: '700px',
// // };

// // export default function Home() {
// //   const [messages, setMessages] = useState([]);
// //   const [inputMessage, setInputMessage] = useState('');

// //   const handleSendMessage = () => {
// //     if (inputMessage.trim() === '') return; // Do not send empty messages

// //     const newMessage = {
// //       id: messages.length + 1,
// //       text: inputMessage,
// //       sender: 'Your Sender Name',
// //     };

// //     setMessages([...messages, newMessage]);
// //     setInputMessage(''); // Clear the input field after sending a message
// //   };

// //   return (
// //     <Container maxWidth="lg">
// //       <Grid container flexDirection={'row'}>
// //         {/* Left Side */}
// //         <Grid item style={leftContainerStyles}>
// //           <div
// //             style={{
// //               width: '100%',
// //               height: '100%',
// //               display: 'flex',
// //               flexDirection: 'column',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //             }}
// //           ></div>
// //         </Grid>

// //         {/* Right Side */}
// //         <Grid item style={rightContainerStyles} spacing={2} justifyContent="left" alignItems="left" flexDirection={'row'}>
// //           <Grid flexDirection={'column'}>
// //             <Paper sx={paperStyle}>
// //               <body>search</body>
// //             </Paper>
// //             <Paper elevation={3} sx={paperStyles}>
// //               <List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, bgcolor: 'background.paper', overflow: 'auto' }}>
// //                 {messages.map((message) => (
// //                   <><ListItem key={message.id} alignItems="flex-start">
// //                     <ListItemAvatar>
// //                       <Avatar alt={message.sender} src="/static/images/avatar/1.jpg" />
// //                     </ListItemAvatar>
// //                     <ListItemText
// //                       primary={message.text}
// //                       secondary={<React.Fragment>
// //                         <Typography sx={typoStyles}>{message.sender}</Typography>
// //                       </React.Fragment>} />
// //                   </ListItem><Divider variant="inset" component="li" /></>
// //                 ))}
// //               </List>
// //             </Paper>
// //           </Grid>
// //           <Grid sx={Style}>
// //             <Paper style={{ height: '440px', overflowY: 'auto', marginTop: '20px' }}>
// //               <AppBar style={{ backgroundColor: 'black', color: 'black' }} />
// //             </Paper>
// //             <Paper style={{ padding: '10px', marginTop: '10px', height: '35px' }}>
// //               <Grid container spacing={1} alignItems="center">
// //                 <Grid item>
// //                   <InsertEmoticonIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D', marginTop: '4px' }} />
// //                   <AttachFileIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D', marginTop: '4px' }} />
// //                   <TextField
// //                     style={{ width: '530px', height: '25px', marginLeft: '5px' }}
// //                     size="small"
// //                     onChange={(e) => setInputMessage(e.target.value)}
// //                     value={inputMessage}
// //                   />
// //                   <SendIcon
// //                     style={{ fontSize: '30px', marginLeft: '15px', color: '#00151D', marginTop: '4px' }}
// //                     onClick={handleSendMessage}
// //                   />
// //                 </Grid>
// //               </Grid>
// //             </Paper>
// //           </Grid>
// //         </Grid>
// //       </Grid>
// //     </Container>
// //   );
// // }

// import React, { useState } from 'react';
// import {
//   Container,
//   Paper,
//   Grid,
//   List,
//   ListItem,
//   Typography,
//   TextField,
//   ListItemAvatar,
//   Avatar,
//   ListItemText,
//   Divider,
//   AppBar,
//   IconButton,
// } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import AddIcon from '@mui/icons-material/Add';

// const typoStyles = {
//   display: 'inline',
//   component: 'span',
//   variant: 'body2',
//   color: 'text.primary',
//   height: '15px',
// };

// const leftContainerStyles = {
//   backgroundColor: 'white',
//   height: '99vh',
// };

// const rightContainerStyles = {
//   backgroundColor: '#F0DC12',
//   height: '95vh',
//   width: '100%',
//   display: 'flex',
//   justifyContent: 'flex-start',
//   alignItems: 'left',
//   marginTop: '40px',
// };

// const paperStyles = {
//   borderRadius: '15px',
//   marginTop: '20px',
//   marginBottom: '2px',
//   width: '370px',
//   padding: '20px',
//   height: '400px',
//   marginLeft: '20px',
//   backgroundColor: '#F8F2F6',
// };

// const paperStyle = {
//   borderRadius: '15px',
//   marginTop: '35px',
//   width: '370px',
//   padding: '20px',
//   height: '15px',
//   marginLeft: '20px',
//   backgroundColor: '#F8F2F6',
// };

// const Style = {
//   padding: '10px',
//   margin: '10px',
//   width: '700px',
// };

// export default function Home() {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [addingContact, setAddingContact] = useState(false);
//   const [newContact, setNewContact] = useState('');

//   const handleSendMessage = () => {
//     if (inputMessage.trim() === '') return;
//     const newMessage = {
//       id: messages.length + 1,
//       text: inputMessage,
//       sender: 'You',
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage('');
//   };

//   const handleAddContact = () => {
//     setAddingContact(true);
//   };

//   const handleSaveContact = (e) => {
//     if (e.key === 'Enter' && newContact.trim() !== '') {
//       // Add the new contact to the chat box
//       const newMessage = {
//         id: messages.length + 1,
//         text: newContact,
//         // sender: 'System',
//       };
//       setMessages([...messages, newMessage]);

//       // Reset state
//       setAddingContact(false);
//       setNewContact('');
//     }
//   };

//   const handleContactClick = (contact) => {
//     // Currently, it adds a new message to the current chat
//     const newMessage = {
//       id: messages.length + 1,
//       text: `Clicked on ${contact}`,
//       sender: 'System',
//     };
//     setMessages([...messages, newMessage]);
//   };

//   return (
//     <Container maxWidth="lg">
//       <Grid container flexDirection={'row'}>
//         {/* Left Side */}
//         <Grid item style={leftContainerStyles}>
//           <div
//             style={{
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           ></div>
//         </Grid>

//         {/* Right Side */}
//         <Grid item style={rightContainerStyles} spacing={2} justifyContent="left" alignItems="left" flexDirection={'row'}>
//           <Grid flexDirection={'column'}>
//             <Paper sx={paperStyle}>
//               <body>
//                 search
//                 <IconButton color="primary" aria-label="add contact" onClick={handleAddContact}>
//                   <AddIcon />
//                 </IconButton>
//                 {addingContact && (
//                   <TextField
//                     label="Enter Contact"
//                     variant="outlined"
//                     value={newContact}
//                     onChange={(e) => setNewContact(e.target.value)}
//                     onKeyPress={handleSaveContact}
//                     style={{ marginTop: '10px' }}
//                   />
//                 )}
//               </body>
//             </Paper>
//             <Paper elevation={3} sx={paperStyles}>
//               <List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, bgcolor: 'background.paper', overflow: 'auto' }}>
//                 {messages.map((message) => (
//                   <><ListItem
//                     key={message.id}
//                     alignItems="flex-start"
//                     button
//                     onClick={() => handleContactClick(message.text)}
//                   >
//                     <ListItemAvatar>
//                       <Avatar alt={message.sender} src="/static/images/avatar/1.jpg" />
//                     </ListItemAvatar>
//                     <ListItemText
//                       primary={message.text}
//                       secondary={<React.Fragment>
//                         <Typography sx={typoStyles}>{message.sender}</Typography>
//                       </React.Fragment>} />
//                   </ListItem><Divider variant="inset" component="li" /></>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>
//           <Grid sx={Style}>
//             <Paper style={{ height: '440px', overflowY: 'auto', marginTop: '20px' }}>
//               <AppBar style={{ backgroundColor: 'black', color: 'black' }} />
//             </Paper>
//             <Paper style={{ padding: '10px', marginTop: '10px', height: '35px' }}>
//               <Grid container spacing={1} alignItems="center">
//                 <Grid item>
//                   <InsertEmoticonIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D', marginTop: '4px' }} />
//                   <AttachFileIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D', marginTop: '4px' }} />
//                   <TextField
//                     style={{ width: '530px', height: '25px', marginLeft: '5px' }}
//                     size="small"
//                     onChange={(e) => setInputMessage(e.target.value)}
//                     value={inputMessage}
//                     onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                   />
//                   <SendIcon
//                     style={{ fontSize: '30px', marginLeft: '15px', color: '#00151D', marginTop: '4px' }}
//                     onClick={handleSendMessage}
//                   />
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

  // import React, { useState } from 'react';
  // import {Container,Paper,Grid,List,ListItem,Typography,TextField,ListItemAvatar,Avatar,ListItemText,
  //   Divider,IconButton,Card,} from '@mui/material';
  // import SendIcon from '@mui/icons-material/Send';
  // import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
  // import AttachFileIcon from '@mui/icons-material/AttachFile';
  // import AddIcon from '@mui/icons-material/Add';
  // import SearchIcon from '@mui/icons-material/Search';

  // const typoStyles = {
  //   display: 'inline',
  //   component: 'span',
  //   variant: 'body2',
  //   color: 'text.primary',
  //   height: '15px',
  // };

  // const leftContainerStyles = {
  //   backgroundColor: 'white',
  //   height: '99vh',
  // };

  // const rightContainerStyles = {
  //   backgroundColor: '#F0DC12',
  //   height: '95vh',
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'flex-start',
  //   alignItems: 'left',
  //   marginTop: '40px',
  // };

  // const paperStyles = {
  //   borderRadius: '15px',
  //   marginTop: '20px',
  //   marginBottom: '2px',
  //   width: '370px',
  //   padding: '20px',
  //   height: '400px',
  //   marginLeft: '20px',
  //   backgroundColor: '#F8F2F6',
  // };

  // const paperStyle = {
  //   borderRadius: '15px',
  //   marginTop: '35px',
  //   width: '370px',
  //   padding: '20px',
  //   height: '15px',
  //   marginLeft: '20px',
  //   backgroundColor: '#F8F2F6',
  // };

  // const Style = {
  //   padding: '10px',
  //   margin: '10px',
  //   width: '700px',
  // };
  // const cardstyle = {
  //   marginTop:'5px',
  //   margin:'7px',  
  //   height:'45px',
  //   padding:'5px',
  //   backgroundColor: '#F8F2F6',
    
  // }

  // export default function Home() {
  //   const [messages, setMessages] = useState([]);
  //   const [inputMessage, setInputMessage] = useState('');
  //   const [addingContact, setAddingContact] = useState(false);
  //   const [newContact, setNewContact] = useState('');
  //   const [selectedContact, setSelectedContact] = useState(null);


  //   const handleAddContact = () => {
  //     setAddingContact(true);
  //   };

  //   const handleSaveContact = (e) => {
  //     if (e.key === 'Enter' && newContact.trim() !== '') {
  //       const newMessage = {
  //         id: messages.length + 1,
  //         text: newContact,
  //       };
  //       setMessages([...messages, newMessage]);
  //       setAddingContact(false);
  //       setNewContact('');
  //     }
  //   };

  //   const handleContactClick = (contact) => {
  //     setSelectedContact(contact);
  //   };
  //   const handleSendMessage = () => {
  //     if (inputMessage.trim() === '') return;
  //     const newMessage = {
  //       id: messages.length + 1,
  //       text: inputMessage,
  //       sender: 'You',
  //     };
  
  //     setMessages([...messages, newMessage]);
  //     setStoredMessages([...storedMessages, inputMessage]); // Store the input message separately
  //     setInputMessage('');
  //   };
  //   return (
  //     <Container maxWidth="lg">
  //       <Grid container flexDirection={'row'}>
  //         <Grid item style={leftContainerStyles}>
  //           <div
  //             style={{
  //               width: '100%',
  //               height: '100%',
  //               display: 'flex',
  //               flexDirection: 'column',
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //             }}
  //           ></div>
  //         </Grid>
  //         <Grid item style={rightContainerStyles} spacing={2} justifyContent="left" alignItems="left" flexDirection={'row'}>
  //           <Grid flexDirection={'column'}>
  //             <Paper sx={paperStyle}>
  //               <body>
                  
  //                   <>
  //                     {/* <SearchIcon style={{ marginRight: '10px' }} /> */}
  //                     <SearchIcon style={{ marginRight: '10px' }} />

  //                     <IconButton onClick={handleAddContact} style={{ marginLeft: '150',marginRight:'40px' }}>
  //                       <AddIcon />
  //                     </IconButton>
  //                     {/* </Card> */}
  //                     {addingContact && (
  //                       <TextField
  //                         label="Enter Contact"
  //                         variant="outlined"
  //                         value={newContact}
  //                         onChange={(e) => setNewContact(e.target.value)}
  //                         onKeyPress={handleSaveContact}
  //                         style={{ marginLeft: '150px' }}
  //                       />
  //                     )}
  //                   </>
                  
  //               </body>
  //             </Paper>
  //             <Paper elevation={3} sx={paperStyles}>
  //               <List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, bgcolor: 'background.paper', overflow: 'auto' }}>
  //                 {messages.map((message) => (
  //                   <div key={message.id}>
  //                     <ListItem alignItems="flex-start" button onClick={() => handleContactClick(message.text)}>
  //                       <ListItemAvatar>
  //                         <Avatar alt={message.sender} src="/static/images/avatar/1.jpg" />
  //                       </ListItemAvatar>
  //                       <ListItemText
  //                         primary={message.text}
  //                         secondary={
  //                           <React.Fragment>
  //                             <Typography sx={typoStyles}>{message.sender}</Typography>
  //                           </React.Fragment>
  //                         }
  //                       />
  //                     </ListItem>
  //                     <Divider variant="inset" component="li" />
  //                   </div>
  //                 ))}
  //               </List>
  //             </Paper>
  //           </Grid>
  //           <Grid sx={Style}>
  //             <Paper style={{ height: '440px', overflowY: 'auto', marginTop: '20px' }}>
  //               <Card sx={cardstyle}>
  //               {selectedContact && (
  //                 <div style={{ display: 'flex', alignItems: 'center' }}>
  //                   <Avatar alt={selectedContact} src="/static/images/avatar/1.jpg" />
  //                   <Typography sx={{ marginLeft: '10px', fontSize: '20px' }}>{selectedContact}</Typography>
  //                   </div>
  //                     )}
  //                 </Card>
  //                 {/* <Card> */}
  //                 <Card>
  //                 {messages.map((message) => (
  //                   <div key={message.id}>
  //                     {message.sender === selectedContact && <Typography>{message.text}</Typography>}
  //                   </div>
  //                 ))}
  //                 {inputMessage && (
  //                   <Typography>{inputMessage}</Typography>
  //                 )}
  //               </Card>
  //               {/* </Card> */}
  //             </Paper>
  //             <Paper style={{ padding: '10px', marginTop: '10px', height: '35px' }}>
  //               <Grid container spacing={1} alignItems="center">
  //                 <Grid item>
  //                   <InsertEmoticonIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D', marginTop: '4px' }} />
  //                   <AttachFileIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D', marginTop: '4px' }} />
  //                   <TextField
  //                     style={{ width: '530px', height: '25px', marginLeft: '5px' }}
  //                     size="small"
  //                     onChange={(e) => setInputMessage(e.target.value)}
  //                   value={inputMessage}
  //                   onKeyPress={(e) => e.key === 'Enter' && (() => {
  //                     if (inputMessage.trim() === '') return;
  //                     const newMessage = {
  //                       id: messages.length + 1,
  //                       text: inputMessage,
  //                       // sender: 'You',
  //                     };

  //                     setMessages([...messages, newMessage]);
  //                     setInputMessage('');
  //                   })()}
  //                   />
  //                   <SendIcon
  //                     style={{ fontSize: '30px', marginLeft: '15px', color: '#00151D', marginTop: '4px' }}
  //                     onClick={() => {
  //                       if (inputMessage.trim() === '') return;
  //                       const newMessage = {
  //                         id: messages.length + 1,
  //                         text: inputMessage,
  //                         sender: 'You',
  //                       };

  //                       setMessages([...messages, newMessage]);
  //                       setInputMessage('');
  //                     }}
  //                   />
  //                 </Grid>
  //               </Grid>
  //             </Paper>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Container>
  //   );
  // }
  import React, { useState } from 'react';
  import { Container, Paper, Grid, List, ListItem, Typography, TextField, ListItemAvatar, Avatar, ListItemText, Divider, IconButton, Card } from '@mui/material';
  import SendIcon from '@mui/icons-material/Send';
  import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
  import AttachFileIcon from '@mui/icons-material/AttachFile';
  import AddIcon from '@mui/icons-material/Add';
  import SearchIcon from '@mui/icons-material/Search';
  
  const typoStyles = {
    display: 'inline',
    component: 'span',
    variant: 'body2',
    color: 'text.primary',
    height: '15px',
  };
  
  const leftContainerStyles = {
    backgroundColor: 'white',
    height: '99vh',
  };
  
  const rightContainerStyles = {
    backgroundColor: '#F0DC12',
    height: '95vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'left',
    marginTop: '40px',
  };
  
  const paperStyles = {
    borderRadius: '15px',
    marginTop: '20px',
    marginBottom: '2px',
    width: '370px',
    padding: '20px',
    height: '400px',
    marginLeft: '20px',
    backgroundColor: '#F8F2F6',
  };
  
  const paperStyle = {
    borderRadius: '15px',
    marginTop: '35px',
    width: '370px',
    padding: '20px',
    height: '15px',
    marginLeft: '20px',
    backgroundColor: '#F8F2F6',
  };
  
  const Style = {
    padding: '10px',
    margin: '10px',
    width: '700px',
  };
  
  const cardstyle = {
    marginTop: '5px',
    margin: '7px',
    height: '45px',
    padding: '5px',
    backgroundColor: '#F8F2F6',
  };
  
  export default function Home() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [inputMessages, setInputMessages] = useState([]); // Corrected state for storing messages
    const [addingContact, setAddingContact] = useState(false);
    const [newContact, setNewContact] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
  
    const handleSendMessage = () => {
      if (inputMessage.trim() === '') return;
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        // sender: 'You',
      };
  
      setMessages([...messages, newMessage]);
      setInputMessages([...inputMessages, inputMessage]); // Corrected state for storing input messages
      setInputMessage('');
    };
  
    const handleAddContact = () => {
      setAddingContact(true);
    };
  
    const handleSaveContact = (e) => {
      if (e.key === 'Enter' && newContact.trim() !== '') {
        const newMessage = {
          id: messages.length + 1,
          text: newContact,
        };
        setMessages([...messages, newMessage]);
        setAddingContact(false);
        setNewContact('');
      }
    };
  
    const handleContactClick = (contact) => {
      setSelectedContact(contact);
    };
  
    return (
      <Container maxWidth="lg">
        <Grid container flexDirection={'row'}>
          <Grid item style={leftContainerStyles}>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></div>
          </Grid>
          <Grid item style={rightContainerStyles} spacing={2} justifyContent="left" alignItems="left" flexDirection={'row'}>
            <Grid flexDirection={'column'}>
              <Paper sx={paperStyle}>
                <body>
                  <>
                    <SearchIcon style={{ marginRight: '10px' }} />
                    <IconButton onClick={handleAddContact} style={{ marginLeft: '150', marginRight: '40px' }}>
                      <AddIcon />
                    </IconButton>
                    {addingContact && (
                      <TextField
                        label="Enter Contact"
                        variant="outlined"
                        value={newContact}
                        onChange={(e) => setNewContact(e.target.value)}
                        onKeyPress={handleSaveContact}
                        style={{ marginLeft: '150px' }}
                      />
                    )}
                  </>
                </body>
              </Paper>
              <Paper elevation={3} sx={paperStyles}>
                <List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, bgcolor: 'background.paper', overflow: 'auto' }}>
                  {messages.map((message) => (
                    <div key={message.id}>
                      <ListItem alignItems="flex-start" button onClick={() => handleContactClick(message.text)}>
                        <ListItemAvatar>
                          <Avatar alt={message.sender} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={message.text}
                          secondary={
                            <React.Fragment>
                              <Typography sx={typoStyles}>{message.sender}</Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </div>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid sx={Style}>
              <Paper style={{ height: '440px', overflowY: 'auto', marginTop: '20px' }}>
                <Card style={cardstyle}>
                  {selectedContact && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar alt={selectedContact} src="/static/images/avatar/1.jpg" />
                      <Typography sx={{ marginLeft: '10px', fontSize: '20px' }}>{selectedContact}</Typography>
                    </div>
                  )}
                </Card>
                <Card>
                  {messages.map((message) => (
                    <div key={message.id}>
                      {message.sender === selectedContact && <Typography>{message.text}</Typography>}
                    </div>
                  ))}
                  {inputMessages.map((storedMessage, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', marginTop: '10px' }}>
                      <Avatar alt="You" src="/static/images/avatar/your_avatar.jpg" />
                      <Typography sx={{ marginLeft: '10px', fontSize: '16px' }}>You: {storedMessage}</Typography>
                    </div>
                  ))}
                </Card>
              </Paper>
              <Paper style={{ padding: '10px', marginTop: '10px', height: '35px' }}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <InsertEmoticonIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D', marginTop: '4px' }} />
                    <AttachFileIcon style={{ fontSize: '30px', marginLeft: '5px', color: '#00151D', marginTop: '4px' }} />
                    <TextField
                      style={{ width: '530px', height: '25px', marginLeft: '5px' }}
                      size="small"
                      onChange={(e) => setInputMessage(e.target.value)}
                      value={inputMessage}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <SendIcon
                      style={{ fontSize: '30px', marginLeft: '15px', color: '#00151D', marginTop: '4px' }}
                      onClick={handleSendMessage}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
  