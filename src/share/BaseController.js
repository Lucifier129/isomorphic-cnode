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
	}
	init() {
		let { initialState, actions, context, methods, location, needLogin } = this
		let userInfo = {}

		// get user infomation from local storage
		if (context.isClient) {
			let userInfoStr = localStorage.getItem('userInfo')
			if (userInfoStr) {
				userInfo = JSON.parse(userInfoStr)
			} else if (needLogin) {
				let { pathname, search, hash } = context.prevLocation || location
				let redirect = pathname + search + hash
				this.goReplace(`/login?redirect=${encodeURIComponent(redirect)}`)
				return
			}
		}

		let store = this.store = createStore(actions, {
			...initialState,
			location,
			userInfo,
			isClient: context.isClient,
			isServer: context.isServer,
		})

		if (context.isClient) {
			let logger = createLogger({
				name: this.name,
			})
			store.subscribe(logger)
		}

		this.methods = Object.keys(methods).reduce((obj, key) => {
			obj[key] = methods[key].bind(obj)
			return obj
		}, Object.create(this))

		let { INIT } = store.actions
		if (!INIT) {
			return this.bindStoreToView()
		}
		return INIT().then(this.bindStoreToView)
	}
	bindStoreToView() {
		if (this.context.isClient) {
			window.scrollTo(0, 0)
			this.store.subscribe(this.refreshView.bind(this))
		}
		return this.render()
	}
	render() {
		let {
			View,
			store,
			methods,
			context,
			location,
			goTo,
			goReplace
		} = this
		return (
			<BaseView
				context={context}
				location={location}
				goTo={goTo}
				goReplace={goReplace}
			>
				<View state={store.getState()} methods={methods} />
			</BaseView>
		)
	}
}