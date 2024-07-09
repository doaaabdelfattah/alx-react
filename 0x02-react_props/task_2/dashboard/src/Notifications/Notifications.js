import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem.js"

function Notifications() {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };
  const style = {
    background: "none",
    border: "none",
    position: "absolute",
    right: "10px",
    top: "12px",
    cursor: "pointer"
  }
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        style={style}
        onClick={handleClick}
      >
        <img src={closeIcon} alt="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  );
}


export default Notifications;
