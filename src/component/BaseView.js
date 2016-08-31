import React, { Component, Children, PropTypes } from 'react'

export default class BaseView extends Component {
	static childContextTypes = {
		location: PropTypes.object,
		goTo: PropTypes.func,
		goReplace: PropTypes.func,
		context: PropTypes.object,
	};
	getChildContext() {
		let { children, ...context } = this.props
		return context
	}
	render() {
		return Children.only(this.props.children)
	}
}