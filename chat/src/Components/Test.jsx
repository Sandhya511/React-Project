// src/components/MessengerApp.js

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Paper, TextField} from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const MessengerApp = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Messenger App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={3}>
            {/* Online Presence Indicators and Contacts List */}
            <Paper>
              {/* Online Presence Indicators */}
              {/* Contacts List */}
            </Paper>
          </Grid>
          <Grid item xs={9}>
            {/* Main Chat Area */}
            <Paper style={{ height: '400px', overflowY: 'auto' }}>
              {/* Display Messages */}
            </Paper>
            {/* Message Input Box */}
            <Paper style={{ padding: '10px', marginTop: '10px' }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={1}>
                  <IconButton>
                    {/* <AttachFileIcon /> */}
                  </IconButton>
                </Grid>
                <Grid item xs={10}>
                  <TextField label="Type a message" fullWidth />
                </Grid>
                <Grid item xs={1}>
                  <IconButton>
                    {/* <EmojiEmotionsIcon /> */}
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton color="primary">
                    {/* <SendIcon /> */}
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MessengerApp;
