import React, { Component, PropTypes } from 'react'

export default class Link extends Component {
	static contextTypes = {
		location: PropTypes.object,
		goTo: PropTypes.func,
		goReplace: PropTypes.func,
	};
	static defaultProps = {
		tagName: 'a',
	};
	render () {
		let { basename = '' } = this.context.location
		let { to, children, tagName, ...other } = this.props
		let href = to ? `${basename}${to}` : null
		let Tag = tagName
		return (
			<Tag {...other} href={tagName === 'a' ? href : null} onClick={this.handleClick}>{children}</Tag>
		)
	}
	handleClick = (event) => {
		let { onClick, replace, to } = this.props
		let { goTo, goReplace, location } = this.context
		let { basename = ''} = location

		onClick && onClick(event)
		
		if (!to) {
			return
		}

		event.preventDefault()
		if (replace === true) {
			goReplace(to)
		} else {
			goTo(to)
		}
	}
}