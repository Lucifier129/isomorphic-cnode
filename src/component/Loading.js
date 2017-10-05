import React from "react";

export default function Loading(props) {
  if (!props.if) {
    return null;
  }
  return (
    <div id="wxloading" className="wx_loading">
      <div className="wx_loading_inner">
        <i className="wx_loading_icon" />
        {props.content}
      </div>
    </div>
  );
}
