import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils.js';
import CloseIcon from './close-icon.png'

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <ul>
          <li data="default">New course available</li>
          <li data="urgent">New resume available</li>
          <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>

      </ul>
      <button aria-label="Close" style={{ background: "none", border: "none", position: "absolute", right: "10px", top: "12px", cursor: "pointer" }} onClick={console.log("Close button has been clicked")}>
        <img src={CloseIcon} alt="close-icon" />
      </button>
    </div>
  )
}
