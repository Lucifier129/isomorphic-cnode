import React from "react";
import { Style } from "react-imvc/component";
import Header from "./Header";
import BackToTop from "./BackToTop";
import Alert from "./Alert";
import Loading from "./Loading";

export default function Layout({ children }) {
  return (
    <div style={{ height: "100%", background: "#fff" }}>
      <Style name="main" />
      <Header />
      {children}
      <BackToTop />
      <Alert />
      <Loading />
    </div>
  );
}
