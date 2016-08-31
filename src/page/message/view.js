/**
 * view
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { getLastTimeStr } from '../../share/util'
import Header from '../../component/Header'
import Link from '../../component/Link'

export default function Message({ state, methods }) {
	let {
		showMenu,
		user,
		userInfo,

		selectItem,
		has_read_messages,
		hasnot_read_messages,
	} = state

	let {
		openMenu,
		closeMenu,
		changeItem,
	} = methods

	let currentData = state[`${selectItem}_messages`] || []

	return (
		<div  style={{ height: '100%', background: '#fff' }}>
			<Header
				pageType="消息"
				fixHead={true}
				needAdd={true}
				showMenu={showMenu}
				openMenu={openMenu}
				closeMenu={closeMenu}
				userInfo={userInfo}
				location={location}
				messageCount={hasnot_read_messages}
			/>
		    <div className="page" >
		        <ul className="tabs">
		            <li
		            	className={classnames({
		            		'item': true,
		            		'br': true,
		            		'selected': selectItem === 'has_read'
		            	})}
		            	data-type="has_read"
		            	onClick={changeItem}
		            >已读消息</li>
		            <li
		            	className={classnames({
		            		'item': true,
		            		'br': true,
		            		'selected': selectItem === 'hasnot_read'
		            	})}
		            	data-type="hasnot_read"
		            	onClick={changeItem}
		            >未读消息
		            { hasnot_read_messages.length > 0 && 
		            	<i className="iconfont read" onClick={markAll}>&#xe60c;</i>
		            }
		            </li>
		        </ul>
		        { currentData.length > 0 &&
		        	currentData.map(data => <MessageInfo {...data} key={data.id} />)
		        }
		        { currentData.length === 0 &&
		        	<div className="no-data">
			            <i className="iconfont icon-empty">&#xe60a;</i>
			            暂无数据!
			        </div>
		        }
		    </div>
		</div>
	)
}

function MessageInfo(props) {
	let {
		id,
		title,
		author,
		type,
		reply,
		topic,
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
				<div className="info">
					<span className="cl">
						<span className="name">{author.loginname}</span>
						{ type === 'at' &&
							<span className="name">在回复中@了您</span>
						}
						{ type === 'reply' &&
							<span className="name">回复了您的话题</span>
						}
					</span>
					<span className="cr">
						<span className="name">{getLastTimeStr(reply.create_at, true)}</span>
					</span>
				</div>
			</section>
			<div className="reply_content" dangerouslySetInnerHTML={{__html: reply.content }} />
			<Link className="topic-title" to={`/topic/${topic.id}`}>话题：{topic.title}</Link>
		</div>
	)
}