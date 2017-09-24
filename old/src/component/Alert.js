import React from 'react'

export default function Alert({ content }) {
	return (
		<div id="wxAlert" className="wx_loading">
	        <div id="wx_alert_inner" className="wx_alert_inner">{content}</div>
	    </div>
	)
}