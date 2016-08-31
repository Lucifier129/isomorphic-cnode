/**
 * actions of method
 */
import { getTopic, upsReply, addReply } from '../../service'
import { linkUsers } from '../../share/util'
import { markdown } from 'markdown'

export let INIT = async (state) => {
	let { location, topic } = state

	if (topic) {
		return state
	}

	let { topicId } = location.params
	let { data } = await getTopic(topicId)

	topic = data

	return {
		...state,
		topic,
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

export let UPDATE_FIELDS = (state, fields = []) => {
	return fields.reduce(UPDATE_FIELD, state)
}

export let ADD_REPLY = async (state, replyId) => {
	let { userInfo, topic, suffix, replyToReply, replyToTopic } = state
	let { token: accesstoken } = userInfo
	let { id: topicId } = topic
	let replyContent = linkUsers(replyId != null ? replyToReply : replyToTopic)
	let content = `<div class="markdown-text">${markdown.toHTML(replyContent)}</div>` + suffix
	let create_at = new Date().getTime()

	let newReplyId = await addReply({
		accesstoken,
		topicId: topic.id,
		replyId,
		content,
	})

	let replyItem = {
		id: newReplyId,
		author: {
			loginname: userInfo.loginname,
			avatar_url: userInfo.avatar_url,
		},
		content: content,
		ups: [],
		create_at,
	}

	return {
		...state,
		[replyId ? 'replyToReply' : 'replyToTopic']: '',
		curReplyId: null,
		topic: {
			...topic,
			replies: topic.replies.concat(replyItem),
		},
	}
}

export let UPS_REPLAY = async (state, replyId) => {
	let { topic } = state
	let { token: accesstoken, id: userId } = state.userInfo
	let action = await upsReply({ accesstoken, replyId })

	let replies = topic.replies.map(reply => {
		if (reply.id !== replyId) {
			return reply
		}
		let { ups } = reply
		if (action === 'down') {
			ups = ups.filter(id => id !== userId)
		} else if (action === 'up') {
			ups = ups.concat(userId)
		}
		return {
			...reply,
			ups,
		}
	})

	return {
		...state,
		topic: { ...topic, replies },
	}
}