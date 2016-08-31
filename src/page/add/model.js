/**
 * actions of model
 */
import { addTopic } from '../../service'
import { accessProp } from '../../share/util'

export let UPDATE_FIELD = (state, { key, value }) => {
	if (state[key] === value) {
		return state
	}
	return {
		...state,
		[key]: value,
	}
}

export let UPDATE_FIELDS = (state, fields = []) => {
	return fields.reduce(UPDATE_FIELD, state)
}

export let ADD_TOPIC = async (state) => {
	let { tab, title, content, userInfo, suffix } = state
	let { token } = userInfo

	let topic_id = await addTopic({
		tab,
		title,
		content: content + suffix,
		accesstoken: token,
	})

	return {
		...state,
		topic_id,
	}
}