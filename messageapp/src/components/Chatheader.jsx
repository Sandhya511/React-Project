import React, { useState } from 'react';
import { Avatar, IconButton, Input, Tooltip, Typography } from '@mui/material';
import { Delete, Paperclip, Phone, Loading } from '@mui/icons-material';
import axios from 'axios';
import { nowTimeStamp } from './Dates';
import Otheruser from './Otheruser';
// import { useIsMobile } from '../functions/isMobile';
import Mobile from './Mobile';
import { privateKey, projectId } from './Constants';

const ChatHeader = (props) => {
  const [isFilePickerLoading, setFilePickerLoading] = useState(false);
  const [isDeleteLoading, setDeleteLoading] = useState(false);

  const isMobile = Mobile();

  const otherMember = props.chat && Otheruser(props.chat, props.username);

  const onFilesSelect = (e) => {
    if (!props.chat) return;
    setFilePickerLoading(true);

    const headers = {
      'Project-ID': projectId,
      'User-Name': props.username,
      'User-Secret': props.secret,
    };

    const formData = new FormData();
    const filesArr = Array.from(e.target.files || []);
    filesArr.forEach((file) => formData.append('attachments', file, file.name));
    formData.append('created', nowTimeStamp());
    formData.append('sender_username', props.username);
    formData.append('custom_json', JSON.stringify({}));

    axios
      .post(`https://api.chatengine.io/chats/${props.chat.id}/messages/`, formData, { headers })
      .then(() => setFilePickerLoading(false))
      .catch(() => setFilePickerLoading(false));
  };

  const onDelete = () => {
    if (!props.chat) return;
    setDeleteLoading(true);

    const headers = { 'Private-Key': privateKey };
    axios
      .delete(`https://api.chatengine.io/chats/${props.chat.id}/`, { headers })
      .then(() => setDeleteLoading(false))
      .catch(() => setDeleteLoading(false));
  };

  return (
    <div className="ce-custom-chat-header">
      {otherMember && (
        <div>
          <Avatar
            className="ce-custom-header-avatar"
            avatarUrl={otherMember?.avatar}
            username={otherMember?.username}
            isOnline={otherMember?.is_online}
          />

          <div className="ce-custom-header-text">
            <div className="ce-custom-header-title">
              {otherMember.first_name} {otherMember.last_name}
            </div>
            <div className="ce-custom-header-subtitle">
              {otherMember.is_online ? 'Online' : 'Offline'}
            </div>
          </div>

          <div className="ce-custom-header-icon-wrapper">
            <form style={{ display: 'inline-block' }}>
              <label htmlFor="ce-files-picker">
                {isFilePickerLoading ? (
                  <Loading className="ce-custom-header-icon" />
                ) : (
                  <Paperclip className="ce-custom-header-icon" />
                )}
              </label>
              <input
                multiple
                id="ce-files-picker"
                style={{ visibility: 'hidden', height: '0px', width: '0px' }}
                type="file"
                onChange={onFilesSelect}
              />
            </form>

            <Tooltip title="Phone">
              <Phone className="ce-custom-header-icon" />
            </Tooltip>

            {isDeleteLoading ? (
              <Loading className="ce-custom-header-icon" />
            ) : (
              <Tooltip title="Delete">
                <IconButton onClick={onDelete}>
                  <Delete className="ce-custom-header-icon" />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </div>
      )}

      <style>{`
        .ce-custom-header-avatar {
          display: inline-block;
          position: relative;
          top: 28px;
          margin-left: ${isMobile ? '48px' : '12px'};
          border: 1px solid ${
            otherMember?.is_online ? 'rgb(24, 144, 255)' : '#fa541c'
          };
          box-shadow: ${
            otherMember?.is_online
              ? 'rgb(24 144 255 / 35%)'
              : 'rgb(245 34 45 / 35%)'
          } 0px 2px 7px;
          width: 38px !important;
          height: 38px !important;
          font-size: 14px !important;
          transition: all 0.66s ease;
        }
      `}</style>
    </div>
  );
};

export default ChatHeader;
