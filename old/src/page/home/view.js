// view
import React, { Component } from 'react'
import { getLastTimeStr, getTabClassName, getTabStr, getTitleStr } from '../../share/util'
import { connectScroll, purify } from '../../share/hoc'
import Header from '../../component/Header'
import Link from '../../component/Link'
import BackToTop from '../../component/BackToTop'

export default connectScroll(['methods', 'handleScroll'])(View)

function View({ state, methods }) {
	let {
		showMenu,
		topics,
		location,
		userInfo,
		searchKey,
	} = state

	let { openMenu, closeMenu } = methods
	return (
		<div>
			<Header
				fixHead={true}
				needAdd={true}
				showMenu={showMenu}
				openMenu={openMenu}
				closeMenu={closeMenu}
				location={location}
				userInfo={userInfo}
				pageType={getTitleStr(searchKey.tab)}
			/>
		    <section id="page">
		        <ul className="posts-list">
		        {
		        	topics.map(topic => <PureTopic {...topic} key={topic.id} />)
		        }
		        </ul>
		    </section>
		    <BackToTop />
		</div>
	)
}

let PureTopic = purify()(Topic)

function Topic(props) {
	let {
		id,
		title,
		good,
		top,
		tab,
		author,
		reply_count,
		create_at,
		last_reply_at,
		visit_count,
	} = props
	return (
		<Link tagName="li" to={`/topic/${id}`}>
			<h3 className={getTabClassName(tab, good, top)} title={getTabStr(tab, good, top)}>{title}</h3>
			<div className="content">
				<img className="avatar" src={author.avatar_url} />
				<div className="info">
					<p>
						<span className="name">{author.loginname}</span>
						{ reply_count > 0 &&
							<span className="status"><b>{reply_count}</b>/{visit_count}</span>
						}
					</p>
					<p>
						<time>{getLastTimeStr(create_at, true)}</time>
						<time>{getLastTimeStr(last_reply_at, true)}</time>
					</p>
				</div>
			</div>
		</Link>
	)
}