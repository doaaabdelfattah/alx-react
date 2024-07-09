import React from "react";
import "./Notifications.css";
import propTypes from "prop-types";

function NotificationItem({ type, value, html }) {
  return (

    <>
      {(type && value) ? <li data-notification-type={type} >{value}</li> : null}
      {html ? <li dangerouslySetInnerHTML={{ __html: html }}></li> : null}


    </>

  )
}

NotificationItem.propTypes = {
  html: propTypes.shape(
    { __html: propTypes.string.isRequired }
  ).isRequired,
  type: propTypes.string,
  value: propTypes.string.isRequired,
};
NotificationItem.defaultProps = {
  type: 'default',

}

export default NotificationItem;
