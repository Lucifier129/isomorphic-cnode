/**
 * actions of method
 */
import { linkUsers } from '../../shared/util'
import { markdown } from 'markdown'

export const initialState = {
	pageTitle: '详情',
	isLogin: true,
	topic: null,
	activeReplyId: null,
	replyOfOthers: {},
	replyOfTopic: '',
	suffix: `\n来自 <a class="from" href="https://github.com/Lucifier129/isomorphic-cnode">isomorphic-cnode</a>`,
}

/**
 * 
 * 首屏数据为 topic
 */
export const COMPONENT_WILL_CREATE = (state, { topic }) => {
	state = UPDATE_HTML_TITLE(state, topic.title)
	return {
		...state,
		topic,
	}
}

/**
 * 点击其他用户评论下的回复时，
 * 展示评论表单
 * 将当前 replyId 设置为 active 并确保 replyOfOthers[replyId] 不为 undefined
 * 如果再次点击，则收起表单
 */
export const TOGGLE_REPLY_FORM = (state, { activeReplyId }) => {
	if (activeReplyId === state.activeReplyId) {
		return HIDE_REPLY_FORM(state)
	} else {
		return SHOW_REPLY_FORM(state, activeReplyId)
	}
}

export const UPDATE_HTML_TITLE = (state, title) => {
	let html = {
		...state.html,
		title,
	}
	return {
		...state,
		html,
	}
}

export const SHOW_REPLY_FORM = (state, activeReplyId) => {
	let replyOfOthers = {...state.replyOfOthers}
	replyOfOthers[activeReplyId] = replyOfOthers[activeReplyId] || ''

	return {
		...state,
		activeReplyId,
		replyOfOthers,
	}
}

export const HIDE_REPLY_FORM = (state) => {
	return {
		...state,
		activeReplyId: null,
	}
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