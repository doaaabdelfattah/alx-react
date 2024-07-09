import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem.js"
import propTypes from "prop-types"
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
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
      {displayDrawer ? (
        <div className="flex">
          <div className="menuItem">
            <p>
              Your notifications
            </p>
          </div>
          {listNotifications && listNotifications.length > 0 ?
            (
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
                  {listNotifications.map(item =>
                    <NotificationItem
                      key={item.id}
                      type={item.type}
                      value={item.value}
                      html={item.html}
                    />
                  )}
                </ul>
              </div>
            ) :
            (
              null
            )}
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
  listNotifications: propTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
