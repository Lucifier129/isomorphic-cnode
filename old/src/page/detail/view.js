import React, { Component } from 'react'
import classnames from 'classnames'
import { getLastTimeStr, getTabClassName, getTabStr, getTitleStr } from '../../share/util'
import Header from '../../component/Header'
import Link from '../../component/Link'
import BackToTop from '../../component/BackToTop'
import Reply from '../../component/Reply'

export default function Detail({ state, methods }) {
	let {
		location,
		userInfo,

		showMenu,
		topic,
		curReplyId,
		replyToReply,
		replyToTopic,
	} = state

	let {
		openMenu,
		closeMenu,
		upReply,
		addReply,
		showReply,
		updateReplyToReply,
		updateReplyToTopic,
	} = methods

	if (!topic) {
		return emptyNotice
	}

	let pageClassName = classnames({
		'show-menu': showMenu,
	})
	let tagClassName = classnames({
		tag: true,
		[getTabClassName(topic.tab, topic.good, topic.top)]: true
	})

	return (
		<div>
			<Header
				pageType="主题"
				showMenu={showMenu}
				needAdd={true}
				fixHead={true}
				openMenu={openMenu}
				closeMenu={closeMenu}
				location={location}
				userInfo={userInfo}
			/>
		{ topic && topic.title &&
			<div id="page">
				<h2 className="topic-title">{topic.title}</h2>
				<section className="author-info">
					<Link
						tagName="img"
						className="avatar"
						src={topic.author.avatar_url}
						to={`/user/${topic.author.loginname}`}
					/>
		            <div className="col">
		                <span>{topic.author.loginname}</span>
		                <time>发布于:{getLastTimeStr(topic.create_at, true)}</time>
		            </div>
		            <div className="right">
		                <span className={tagClassName}>{getTabStr(topic.tab, topic.good, topic.top)}</span>
		                <span className="name">{topic.visit_count}次浏览</span>
		            </div>
		        </section>
		        <section
		        	className="markdown-body topic-content"
		        	dangerouslySetInnerHTML={{ __html: topic.content}}
		        />
		        <h3 className="topic-reply">
		            <strong>{topic.reply_count}</strong> 回复
		        </h3>
		        <section className="reply-list">
		        	<ul>
		        	{
		        		topic.replies.map(reply => 
		        			<ReplyItem
		        				{...reply}
		        				key={reply.id}
		        				upReply={upReply}
		        				addReply={addReply}
		        				showReply={showReply}
		        				topicId={topic.id}
		        				curReplyId={curReplyId}
		        				isUps={reply.ups.indexOf(userInfo.id) !== -1}
		        				replyContent={replyToReply}
		        				updateReplyToReply={updateReplyToReply}
		        			/>
		        		)
		        	}
		        	</ul>
		        </section>
			</div>
		}
		<BackToTop />
		{ !!userInfo.loginname &&
			<Reply
				replyContent={replyToTopic}
				handleInput={updateReplyToTopic}
				addReply={addReply}
			/>
		}
		</div>
	)
}

function ReplyItem(props) {
	let {
		id,
		author,
		create_at,
		ups,
		upReply,
		addReply,
		showReply,
		content,
		replyContent,
		isUps,
		curReplyId,
		updateReplyToReply,
	} = props

	let iconUpedClassName = classnames({
		'iconfont': true,
		'icon': true,
		'uped': isUps,
	})

	return (
		<li>
			<section className="user">
				<Link tagName="img" className="head" src={author.avatar_url} to={`/user/${author.loginname}`} />
				<div className="info">
					<span className="cl">
						<span className="name">{author.loginname}</span>
						<span className="name mt10">
							<span></span>发布于:{getLastTimeStr(create_at, true)}
						</span>
					</span>
					<span className="cr">
						<span className={iconUpedClassName} onClick={upReply} data-id={id}>&#xe608;</span>
						{ups.length}
						<span className="iconfont icon" onClick={showReply} data-id={id}>&#xe609;</span>
					</span>
				</div>
			</section>
			<div
				className="reply_content"
				dangerouslySetInnerHTML={{ __html: content}} />
			{ curReplyId === id &&
				<Reply
					replyId={id}
					content={replyContent}
					handleInput={updateReplyToReply}
					addReply={addReply}
				/>
			}
		</li>
	)
}


const emptyNotice = (
	<div style={{ height: '100%', background: '#fff' }}>
		<div className='no-data'>
	        <i className="iconfont icon-empty">&#xe60a;</i>
	        该话题不存在!
	    </div>
	</div>
)
