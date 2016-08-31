import React, { Component } from 'react'
import classnames from 'classnames'

export default function Reply(props) {
	let {
		hasErr,
		replyId,
		content,
		addReply,
		handleInput,
	} = props

	let className = {
		'text': true,
		'err': hasErr,
	}
	return (
		<section className="reply">
	        <textarea
	        	rows="8"
	        	className={className}
	            placeholder='回复支持Markdown语法,请注意标记代码'
	            value={content}
	            onChange={handleInput}
	         />
	        <button
	        	className="button"
	        	onClick={addReply}
	        	data-reply={replyId}
	        	>确定</button>
	    </section>
	)
}