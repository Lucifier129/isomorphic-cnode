import React, { Component } from 'react'
import { purify } from '../share/hoc'
import Link from './Link'

export default purify()(UserInfo)

function UserInfo({ location, userInfo }) {
	return (
		<div className="user-info">
		{ userInfo && !!userInfo.loginname
			? <User userInfo={userInfo}  />
			: <Login location={location} />
		}
	    </div>
	)
}

function Login({ location }) {

	if (location.pathname === '/login') {
		return null
	}

	let currentPath = `${location.pathname}${location.search}${location.hash}`
	let targetPath = `/login?redirect=${currentPath}`
	return (
		<ul className="login-no">
			<li className="login">
				<Link to={targetPath}>登录</Link>
			</li>
		</ul>
	)
}

function User({ userInfo }) {
	return (
		<Link tagName="div" className="login-yes" to={`/user/${userInfo.loginname}`}>
			<div className="avertar">
			{ userInfo.avatar_url &&
				<img src={userInfo.avatar_url} />
			}
			</div>
			<div className="info">
			{ userInfo.loginname &&
				<p>{userInfo.loginname}</p>
			}
			</div>
		</Link>
	)
}