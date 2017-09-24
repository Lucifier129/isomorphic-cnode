import React, { Component } from 'react'

export default function Loading({ text }) {
	return (
		<div id="wxloading" className="wx_loading">
	        <div className="wx_loading_inner">
	            <i className="wx_loading_icon"></i>{text}...
	        </div>
	    </div>
	)
}