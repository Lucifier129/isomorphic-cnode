import React from "react";
import { Style } from "react-imvc/component";
import Header from "./Header";
import BackToTop from "./BackToTop";
import Alert from "./Alert";
import Loading from "./Loading";

export default function Layout({ state, handlers, children }) {
  return (
    <div style={{ height: "100%", background: "#fff" }}>
      <Style name="main" />
      <Header state={state} handlers={handlers} />
      {children}
      <BackToTop />
      <Alert if={state.alertText} content={state.alertText} />
      <Loading if={state.loadingText} content={state.loadingText} />
    </div>
  );
}
