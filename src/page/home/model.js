/**
 * actions of model
 */
import { getTopics } from '../../service'

export let INIT = async (state) => {
	let { searchKey, topics, location } = state

	if (topics.length > 0) {
		return state
	}

	if (location.query.tab) {
		searchKey = {
			...searchKey,
			tab: location.query.tab,
		}
	}

	let { data } = await getTopics(searchKey)

	return {
		...state,
		topics: data,
		searchKey,
	}
}

export let FETCH_NEXT_TOPICS = async (state) => {
	let { searchKey, topics } = state

	searchKey = {
		...searchKey,
		page: searchKey.page + 1,
	}

	let { data } = await getTopics(searchKey)

	topics = topics.concat(data)

	return {
		...state,
		searchKey,
		topics,
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