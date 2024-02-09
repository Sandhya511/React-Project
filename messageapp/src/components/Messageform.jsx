import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { CaretUpFilled } from '@mui/icons-material';
import { MessageObject } from 'react-chat-engine-advanced';
import { nowTimeStamp } from './Dates';
import { Context } from './Context';

const Messageform = (props) => {
  const [text, setText] = useState('');
  const { user } = useContext(Context);

  const onSubmit = (event) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      return;
    }
    if (!user || user.email === null) {
      return;
    }

    setText('');

    const message = {
      text: text,
      sender_username: user.email,
      created: nowTimeStamp(),
      custom_json: {},
      attachments: [],
    };

    props.onSubmit && props.onSubmit(message);
  };

  return (
    <form onSubmit={onSubmit} className="ce-custom-message-form">
      <TextField
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Type something..."
        className="ce-custom-message-input"
      />

      <Button type="submit" className="ce-custom-send-button">
        <CaretUpFilled />
      </Button>
    </form>
  );
};

export default Messageform;
