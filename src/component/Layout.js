import React from "react";
import { Style } from "react-imvc/component";
import Header from "./Header";
import BackToTop from "./BackToTop";

export default function Layout({ state, handlers, children }) {
  return (
    <div>
      <Style name="main" />
      <Header state={state} handlers={handlers} />
      {children}
      <BackToTop />
    </div>
  );
}
