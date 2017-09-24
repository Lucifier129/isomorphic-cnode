/**
 * view
 */
import React, { Component } from 'react'
import Header from '../../component/Header'
import Loading from '../../component/Loading'
import Alert from '../../component/Alert'

export default function Login({ state, methods }) {
	let {
		token,
		alertText,
		showLoading,

		userInfo,
		location,
		showMenu,
	} = state

	let {
		openMenu,
		closeMenu,
		handleInput,
		readPic,
		login,
	} = methods

	return (
		<div style={{ height: '100%', background: '#fff' }}>
			<Header
				pageType="登录"
				fixHead={true}
				showMenu={showMenu}
				openMenu={openMenu}
				closeMenu={closeMenu}
				location={location}
				userInfo={userInfo}
			/>
			<section className="page-body">
		        <div className="label">
		            <input
		            	className="txt"
		            	type="text"
		            	placeholder="Access Token"
		            	maxLength="36"
		            	value={token}
		            	onChange={handleInput}
		            />
		        </div>
		        <div className="label">
		            <button className="button">选择二维码图片</button>
		            <input
		            	className="file"
		            	type="file"
		            	id="file_upload"
		            	onChange={readPic}
		                accept="image/*"
		                capture="camera"
		            />
		            <button className="button" onClick={login}>登录</button>
		        </div>
		    </section>
		    { alertText &&
		    	<Alert content={alertText} />
		    }
		    { showLoading &&
		    	<Loading text="二维码识别中" />
		    }
		</div>
	)
}