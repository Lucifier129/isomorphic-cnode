import React from 'react'

export let purify = () => (InputComponent) => {
    return class Pure extends React.PureComponent {
        render() {
            return <InputComponent {...this.props} />
        }
    }
}

export let staticify = () => (InputComponent) => {
    return class Static extends React.Component {
        shouldComponentUpdate() {
            return false // always false to make sure just rendering once
        }
        render() {
            return <InputComponent {...this.props} />
        }
    }
}