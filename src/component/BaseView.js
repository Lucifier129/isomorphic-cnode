import React, { Component, Children, PropTypes } from 'react'

export default class BaseView extends Component {
	static childContextTypes = {
		location: PropTypes.object,
		goTo: PropTypes.func,
		goReplace: PropTypes.func,
	};
	getChildContext() {
		return this.props.context
	}
	render() {
		return Children.only(this.props.children)
	}
}