import React from "react";
import { Input } from "react-imvc/component";
import Layout from "../../component/Layout";

export default function View({ state, handlers }) {
  let { alertText, loadingText } = state;
  let { handleLogin } = handlers;

  return (
    <Layout state={state} handlers={handlers}>
      <section className="page-body">
        <div className="label">
          <Input
            name="token"
            className="txt"
            type="text"
            placeholder="Access Token"
            maxLength="36"
          />
        </div>
        <div className="label">
          <button className="button" onClick={handleLogin}>
            登录
          </button>
        </div>
      </section>
    </Layout>
  );
}
