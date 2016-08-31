/**
 * high order component
 */
import React, { Component, PureComponent } from 'react'
import { accessProp } from './util'

export let purify = () => (InputComponent) => {
    return class Pure extends PureComponent {
        render() {
            return <InputComponent {...this.props} />
        }
    }
}

export let connectScroll = (path) => (InputComponent) => {
    return class ConnectScroll extends Component {
        handleScroll = (event) => {
            let handleScroll = accessProp(this.props, path)
            if (typeof handleScroll === 'function') {
                handleScroll(event)
            }
        }
        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll)
        }
        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll)
        }
        render() {
            return <InputComponent {...this.props} />
        }
    }
}

export let addClassName = ({ path, target, className }) => (InputComponent) => {
    return class AddiClassName extends Component {
        componentDidUpdate() {
            let shouldHide = accessProp(this.props, path)
            let method = shouldHide ? 'add' : 'remove'
            target
            .reduce((elems, selector) => {
                return elems.concat(Array.from(document.querySelectorAll(selector)))
            }, [])
            .map(elem => {
                elem.classList[method](className)
            })
        }
        render() {
            return <InputComponent {...this.props} />
        }
    }
}