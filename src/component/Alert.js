import React from "react";

export default function Alert(props) {
  if (!props.if) {
    return null;
  }
  return (
    <div id="wxAlert" className="wx_loading">
      <div id="wx_alert_inner" className="wx_alert_inner">
        {props.content}
      </div>
    </div>
  );
}
