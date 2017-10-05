import React from "react";
import { Link } from "react-imvc/component";
import connect from 'react-imvc/hoc/connect'

const withData = connect(({ state, handlers }) => {
  return {
    location: state.location,
    userInfo: state.userInfo,
    user: state.user,
    onLogout: handlers.handleLogout,
  }
})

export default withData(UserInfo)

function UserInfo({ location, userInfo, user, onLogout }) {
  let showLogout =
    location.pattern === "/user/:loginname" &&
    userInfo &&
    user &&
    userInfo.loginname === user.loginname;
  return (
    <div className="user-info">
      <User if={!showLogout && userInfo} info={userInfo} />
      <Login if={!showLogout && !userInfo} redirect={location.raw} />
      <Logout if={showLogout} onLogout={onLogout} />
    </div>
  );
}

function Login(props) {
  if (!props.if) {
    return null;
  }

  return (
    <ul className="login-no">
      <Link as="li" className="login" to={`/login?redirect=${props.redirect}`}>
        登录
      </Link>
    </ul>
  );
}

function Logout(props) {
  if (!props.if) {
    return null;
  }

  return (
    <ul className="login-no">
      <li className="login" onClick={props.onLogout}>
        退出
      </li>
    </ul>
  );
}

function User(props) {
  if (!props.if) {
    return null;
  }
  let { loginname, avatar_url } = props.info;
  return (
    <Link as="div" to={`/user/${loginname}`} className="login-yes">
      <div className="avertar">{avatar_url && <img src={avatar_url} />}</div>
      <div className="info">{loginname && <p>{loginname}</p>}</div>
    </Link>
  );
}
