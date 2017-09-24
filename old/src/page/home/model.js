/**
 * model
 */

 export const initialState = {
	topics: [],
	searchParams: {
		page: 1,
		limit: 20,
		tab: 'all',
		mdrender: true
	},
 }

export let INIT = async (state) => {
	let { searchKey, location } = state

	if (location.query.tab) {
		searchKey = {
			...searchKey,
			tab: location.query.tab,
		}
	}

	let { data } = await getTopics(searchKey)
	let topics = data.map(item => {
		let { content, ...topic } = item
		return topic
	})

	return {
		...state,
		topics,
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