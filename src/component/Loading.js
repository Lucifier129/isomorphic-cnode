import React from "react";
import connect from 'react-imvc/hoc/connect'

const withData = connect(({ state }) => {
  return {
    content: state.loadingText
  }
})

export default withData(Loading)

function Loading(props) {
  if (!props.content) {
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
