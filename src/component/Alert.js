import React from "react";
import connect from 'react-imvc/hoc/connect'

const withData = connect(({ state }) => {
  return {
    content: state.alertText
  }
})

export default withData(Alert)

function Alert(props) {
  if (!props.content) {
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
