import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Sugestions for you</div>
      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>U</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Username</span>
              <span className="relation">New to instagram</span>
            </div>
            <button className="follow__button">Follow</button>
          </div>
        </div>
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>U</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Username</span>
              <span className="relation">New to instagram</span>
            </div>
            <button className="follow__button">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
