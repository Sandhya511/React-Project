import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ChatObject } from 'react-chat-engine-advanced';
// import { getOtherUser } from '../functions/getOtherUser';
import Otheruser from './Otheruser';
const useStyles = makeStyles((theme) => ({
  activeChat: {
    background: theme.palette.action.hover,
  },
}));

const ChatCard = (props) => {
  const classes = useStyles();

  if (!props.chat) return <div />;

  const otherMember = Otheruser(props.chat, props.username);
  const firstName = otherMember ? otherMember.first_name : '';
  const lastName = otherMember ? otherMember.last_name : '';
  const username = otherMember ? otherMember.username : '';
  const messageText = props.chat.last_message.text;
  const hasNotification = props.chat.last_message.sender_username !== props.username;

  return (
    <ListItem button className={props.isActive ? classes.activeChat : undefined} onClick={() => props.chat && props.onChatCardClick(props.chat.id)}>
      <ListItemAvatar>
        <Avatar
          alt={username}
          src={otherMember?.avatar}
          style={{
            boxShadow: otherMember?.is_online
              ? 'rgb(24 144 255 / 35%) 0px 2px 7px'
              : 'rgb(245 34 45 / 35%) 0px 2px 7px',
            border: otherMember?.is_online
              ? '1px solid rgb(24 144 255)'
              : '1px solid rgb(245 34 45)',
          }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={`${firstName} ${lastName}`}
        secondary={messageText === null || messageText.length === 0 ? 'Say hello!' : messageText}
      />
      {hasNotification && <Typography variant="caption">New Message</Typography>}
    </ListItem>
  );
};

export default ChatCard;
