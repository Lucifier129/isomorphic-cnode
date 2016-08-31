import React, { Component } from 'react'
import classnames from 'classnames'
import { addClassName } from '../share/hoc'
import Menu from './Menu'
import Link from './Link'

let settings = {
	path: ['showMenu'],
	target: ['html', 'body', '#page'],
	className: 'scroll-hide',
}

export default addClassName(settings)(Header)


function Header(props) {
	let {
		showMenu,
		fixHead,
		needAdd,
		openMenu,
		closeMenu,
		messageCount,
		userInfo,
		location,
		pageType,
	} = props
	let headClassName = classnames({
		'show': showMenu && fixHead,
		'fix-header': fixHead,
		'no-fix': !fixHead
	})
	return (
		<div>
		{ showMenu && fixHead &&
			<div className="page-cover" onClick={closeMenu}></div>
		}
			<header id="hd" className={headClassName}>
				<div className="nv-toolbar">
				{ fixHead &&
					<div className="toolbar-nav" onClick={openMenu}></div>
				}
					<span>{pageType}</span>
				{ messageCount && messageCount > 0 &&
					<i className="num">{messageCount}</i>
				}
				{ needAdd && (!messageCount || messageCount <= 0) &&
					<Link tagName="i" className="iconfont add-icon" to={`/add`}>&#xe60f;</Link>
				}
				</div>
			</header>
			{ fixHead &&
				<Menu
					showMenu={showMenu}
					userInfo={userInfo}
					location={location}
					closeMenu={closeMenu}
				/>
			}
			</div>
		)
}