/**
 * view
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { getLastTimeStr } from '../../share/util'
import Header from '../../component/Header'
import Link from '../../component/Link'

export default function Add({ state, methods }) {
	let {
		userInfo,
		location,
		showMenu,

		tab,
		title,
		content,
		tabs,
		err,
	} = state

	let {
		openMenu,
		closeMenu,
		addTopic,
		updateTitle,
		updateTab,
		updateContent,
	} = methods

	return (
		<div style={{ height: '100%', background: '#fff' }}>
			<Header
				pageType="主题"
				fixHead={true}
				showMenu={showMenu}
				openMenu={openMenu}
				closeMenu={closeMenu}
				userInfo={userInfo}
				location={location}
			/>
			<div className="add-container">
		        <div className="line">选择分类：
		            <select className="add-tab" value={tab} onChange={updateTab}>
		            {
		            	tabs.map(({ type, text }) => 
		            		<option value={type} key={type}>{text}</option>
		            	)
		            }
		            </select>
		            {' '}
		            <a className="add-btn" onClick={addTopic}>发布</a>
		        </div>
		        <div className="line">
		            <input
		            	type="text"
		            	className={classnames({
		            		'add-title': true,
		            		'err': err === 'title',
		            	})}
		            	value={title}
		            	onChange={updateTitle}
		            	placeholder="标题，字数10字以上"
		            	maxLength="100"
		            />
		        </div>
		        <textarea
		        	onChange={updateContent}
		        	value={content}
		        	className={classnames({
		        		'add-content': true,
		        		'err': err === 'content'
		        	})}
		            placeholder='回复支持Markdown语法,请注意标记代码'
		            rows="35"
		        />
		    </div>
		</div>
	)
}