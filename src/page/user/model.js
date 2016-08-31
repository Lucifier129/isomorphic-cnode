/**
 * actions of model
 */
import { getUserData } from '../../service'

export let INIT = async (state) => {
	let { loginname } = state.location.params
	let user = await getUserData(loginname)

	return {
		...state,
		user,
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