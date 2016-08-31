/**
 * view
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { getLastTimeStr } from '../../share/util'
import Header from '../../component/Header'
import Link from '../../component/Link'

export default function User({ state, methods }) {
	let {
		showMenu,
		user,
		selectItem,
		userInfo
	} = state

	let {
		openMenu,
		closeMenu,
		changeItem,
	} = methods

	let currentData = user[`recent_${selectItem}`] || []

	return (
		<div  style={{ height: '100%', background: '#fff' }}>
			<Header
				pageType="用户信息"
				fixHead={true}
				needAdd={true}
				showMenu={showMenu}
				openMenu={openMenu}
				closeMenu={closeMenu}
				userInfo={userInfo}
				location={location}
			/>
		    <section className="userinfo">
		        <img className="u-img" src={user.avatar_url} />
		        <br/>
		        <span className="u-name">{user.loginname}</span>
		        <div className="u-bottom">
		            <span className="u-time">{getLastTimeStr(user.create_at, false)}</span>
		            <span className="u-score">积分：{user.score}</span>
		        </div>
		    </section>
		    <section className="topics">
		        <ul className="user-tabs">
		            <li 
		           		className={classnames({
		            	'item': true,
		            	'br': true,
		            	'selected': selectItem === 'replies',
		            	})}
		            	data-type="replies"
		            	onClick={changeItem}>最近回复</li>
		            <li 
		           		className={classnames({
		            	'item': true,
		            	'br': true,
		            	'selected': selectItem === 'topics',
		            	})}
		            	data-type="topics"
		            	onClick={changeItem}>最新发布</li>
		        </ul>
		        { currentData.length > 0 &&
			    	currentData.map(message => <Message {...message} key={message.id} />)
			    }
			    { currentData.length === 0 &&
			    	<div className="no-data">
						<i className="iconfont icon-empty">&#xe60a;</i>
						暂无数据!
					</div>
			    }
		    </section>
		</div>
	)
}

function Message(props) {
	let {
		id,
		title,
		author,
		last_reply_at,
	} = props
	return (
		<div className="message markdown-body">
			<section className="user">
				<Link
					tagName="img"
					className="head"
					src={author.avatar_url}
					to={`/user/${author.loginname}`}
				/>
				<Link tagName="div" to={`/topic/${id}`}>
					<div className="t-title">{title}</div>
					<span className="cl">
						<span className="name">{author.loginname}</span>
					</span>
					<span className="cr">
						<span className="name">{getLastTimeStr(last_reply_at, true)}</span>
					</span>
				</Link>
			</section>
		</div>
	)
}