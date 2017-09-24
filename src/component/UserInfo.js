import React from "react";
import { Link } from "react-imvc/component";

export default function UserInfo({ location, userInfo }) {
  return (
    <div className="user-info">
      {!!userInfo && <User {...userInfo} />}
      {!userInfo && <Login location={location} />}
    </div>
  );
}

function Login({ location }) {
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <ul className="login-no">
      <Link as="li" className="login" to={`/login?redirect=${location.raw}`}>登录</Link>
    </ul>
  );
}

function User({ loginname, avatar_url }) {
  return (
    <Link as="div" to={`/user/${loginname}`} className="login-yes">
      <div className="avertar">{avatar_url && <img src={avatar_url} />}</div>
      <div className="info">{loginname && <p>{loginname}</p>}</div>
    </Link>
  );
}
