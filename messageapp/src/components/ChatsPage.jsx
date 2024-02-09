import React, { useContext } from "react";
// import {Mobile } from "./Mobile";
import Mobile from './Mobile';
import { Context } from "./Context";
import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
  ChatcardProps,
  ChatheaderProps,
} from "react-chat-engine-advanced";
import Sidebar from "./Sidebar";
import MessageForm from "./Messageform";
import UserSearch from "./Usersearch";
import ChatCard from "./Chatcard";
import ChatHeader from "./Chatheader";
import { projectId } from "./Constants";
import { Box } from "@mui/system";

const ChatsPage = () => {
  // Hooks
  const { user } = useContext(Context);
  const isMobile = Mobile();

  // Chat Engine Hooks
  const username = user ? user.username : "";
  const secret = user && user.secret !== null ? user.secret : "";
  const chatProps = useMultiChatLogic(projectId, username, secret);

  const backgroundImage = {
    backgroundImage: `url('../wp.jpeg')`,
  };

  return (
    <Box className="background-image" style={backgroundImage}>
      <Box className="background-gradient-light">
        <Box
          sx={{
            position: "relative",
            top: isMobile ? "0px" : "10vh",
            left: isMobile ? "0px" : "calc(50vw - 3vw - 1.5vw - 35vw)",
            height: isMobile ? "100vh" : "80vh",
            width: isMobile ? "100vw" : "calc(100vw - 10.5vw - 10.5vw)",
            backgroundColor: "grey",
          }}
        >
          <Box
            sx={{
              width: "6vw",
              height: "100%",
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundColor: "rgb(40,43,54)",
            }}
          >
            <Sidebar />
          </Box>

          <Box
            sx={{
              width: isMobile ? "100vw" : "calc(100vw - 6vw)",
              position: "absolute",
              top: "0px",
              left: isMobile ? "0px" : "6vw",
              height: "100%", // Fill parent height
            }}
          >
            <MultiChatSocket {...chatProps} />

            <MultiChatWindow
              {...chatProps}
              renderChatForm={() => (
                <UserSearch
                  username={chatProps.username}
                  secret={chatProps.secret}
                  onSelect={(chatId) => chatProps.onChatCardClick(chatId)}
                />
              )}
              renderChatCard={(props) => (
                <ChatCard
                  {...props}
                  username={chatProps.username}
                  onChatCardClick={chatProps.onChatCardClick}
                  isActive={
                    props.chat !== undefined &&
                    chatProps.activeChatId === props.chat.id
                  }
                  chat={props.chat}
                />
              )}
              renderChatHeader={(props) => (
                <ChatHeader
                  {...props}
                  chat={chatProps.chat}
                  username={chatProps.username}
                  secret={chatProps.secret}
                />
              )}
              renderMessageForm={(props) => <MessageForm {...props} />}
              renderChatSettings={() => <Box className="ce-empty-settings" />}
              style={{ height: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatsPage;
