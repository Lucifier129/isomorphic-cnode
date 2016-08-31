/**
 * actions of model
 */
import { readPic, getUserInfo } from '../../service'

export let GET_TOKEN_BY_IMG = async (state, base64Img) => {
	let token = await readPic(base64Img)
	return {
		...state,
		token,
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

export let FETCH_USER_INFO = async (state) => {
	let { token } = state
	let userInfo = await getUserInfo(token)
	return {
		...state,
		userInfo,
	}
}