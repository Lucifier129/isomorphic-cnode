/**
 * actions of model
 */
import { getMessages, markAllMessages } from '../../service'

export let INIT = async (state) => {
	let { token } = state.userInfo
	let messages = await getMessages(token)

	return {
		...state,
		...messages,
	}
}

export let UPDATE_FIELD = (state, { key, value }) => {
	if (state[key] === value) {
		return state
	}
	return {
		...state,
		[key]: value,
	}
}

export let MARK_ALL_MESSAGES = async (state) => {
	let { token } = state.userInfo.params
	await markAllMessages()
	return state
}