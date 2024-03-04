import React from "react";
import Suggestions from "./Suggestions";
import "./Timeline.css";
function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">Timeline</div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
