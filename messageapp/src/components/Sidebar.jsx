import React, { useContext } from "react";
import { LogoutOutlined, HomeFilled, MessageFilled, SettingFilled } from "@mui/icons-material";
import { Avatar } from "react-chat-engine-advanced";
import { Context } from "./Context";

const Sidebar = () => {
  const { user, setUser } = useContext(Context);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="ce-sidebar-menu">
        <HomeFilled className="ce-sidebar-icon" />
        <MessageFilled className="ce-sidebar-icon ce-sidebar-icon-active" />
        <SettingFilled className="ce-sidebar-icon" />
      </div>

      <Avatar
        className="sidebar-avatar"
        avatarUrl={typeof user?.avatar === "string" ? user.avatar : undefined}
        username={user?.username}
        isOnline={true}
      />

      <LogoutOutlined onClick={() => setUser(undefined)} className="signout-icon" />
    </div>
  );
};

export default Sidebar;
