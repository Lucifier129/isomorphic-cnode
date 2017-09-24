import React from 'react'

export let purify = () => (InputComponent) => {
    return class Pure extends React.PureComponent {
        render() {
            return <InputComponent {...this.props} />
        }
    }
}