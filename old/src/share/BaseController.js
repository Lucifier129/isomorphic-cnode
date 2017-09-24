// base controller class
import React, { Component } from 'react'
import { createStore, createLogger } from 'relite'
import BaseView from '../component/BaseView'

export default class Controller {
	constructor(location, context) {
		this.location = location
		this.context = context
		this.bindStoreToView = this.bindStoreToView.bind(this)
		this.goTo = this.goTo.bind(this)
		this.goReplace = this.goReplace.bind(this)
		this.childContext = {
			location,
			goTo: this.goTo,
			goReplace: this.goReplace,
		}
	}
	init() {
		let { initialState, actions, context, methods, location, needLogin } = this
		let __INITIAL_STATE__ = null
		let userInfo = {}

		// get user infomation from local storage
		if (context.isClient) {
			let userInfoJSON = localStorage.getItem('userInfo')
			if (userInfoJSON) {
				userInfo = JSON.parse(userInfoJSON)
			}
			if (window.__INITIAL_STATE__) {
				__INITIAL_STATE__ = window.__INITIAL_STATE__
				window.__INITIAL_STATE__ = undefined
			}
		}

		let store = this.store = createStore(actions, {
			...initialState,
			...__INITIAL_STATE__,
			location,
			userInfo,
			isClient: context.isClient,
			isServer: context.isServer,
		})

		if (needLogin && !userInfo.loginname) {
			let targetPath = '/login'
			let redirect = getRedirect(context.prevLocation) || getRedirect(location)
			if (redirect) {
				targetPath += `?redirect=${encodeURIComponent(redirect)}`
			}
			return this.goReplace(targetPath)
		}

		// add logger and bind store to view in client
		if (context.isClient) {
			let logger = createLogger({
				name: this.name,
			})
			store.subscribe(logger)
		}

		// bind methods
		this.methods = Object.keys(methods).reduce((obj, key) => {
			obj[key] = methods[key].bind(obj)
			return obj
		}, Object.create(this))

		// INIT action had invoked at server side, just render page directly
		if (__INITIAL_STATE__) {
			return this.bindStoreToView()
		}

		let { INIT } = store.actions
		if (!INIT) {
			return this.bindStoreToView()
		}
		return INIT().then(this.bindStoreToView)
	}
	bindStoreToView() {
		let { context, store } = this
		if (context.isClient) {
			this.unsubscribe = store.subscribe(this.refreshView.bind(this))
			window.scrollTo(0, 0)
		}
		return this.render()
	}
	destroy() {
		if (this.unsubscribe) {
			this.unsubscribe()
		}
	}
	render() {
		let { View, store, methods, childContext } = this
		return (
			<BaseView context={childContext}>
				<View state={store.getState()} methods={methods} />
			</BaseView>
		)
	}
}

function getRedirect(location) {
	if (location && location.raw.indexOf('/login') !== 0) {
		return location.raw
	}
}