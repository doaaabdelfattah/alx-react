import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem.js"
import propTypes from "prop-types"

function Notifications({ displayDrawer }) {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };
  const style = {
    background: "none",
    border: "none",
    position: "absolute",
    right: "6px",
    top: "65px",
    cursor: "pointer"
  }
  return (
    <>
      {(displayDrawer) ? (
        <div className="flex">
          <div className="menuItem">
            <p>
              Your notifications
            </p>
          </div>

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

        </div>
      ) : (<div className="menuItem">
        <p>
          Your notifications
        </p>
      </div>)}
    </>

  );
}

Notifications.prototypes = {
  displayDrawer: propTypes.bool,
}


Notifications.defaultProps = {
  displayDrawer: false,
}
export default Notifications;
