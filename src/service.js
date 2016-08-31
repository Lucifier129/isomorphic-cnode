/**
 * service of app
 */
import querystring from 'querystring'
import { createFetchJSON } from './share/util'

const base = 'https://cnodejs.org/api/v1'
const fetchJSON = createFetchJSON(base)

export let getTopics = (searchKey) => {
    return fetchJSON(`/topics?${querystring.stringify(searchKey)}`)
}

export let getTopic = (topicId) => {
    return fetchJSON(`/topic/${topicId}`)
}

export let getUserInfo = async (accesstoken) => {
	let url = '/accesstoken'
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify({ accesstoken }),
	}
	let { success, error_msg, ...userInfo } = await fetchJSON(url, options)

	if (!success) {
		throw new Error(error_msg)
	}

	return userInfo
}

export let getUserData = async (loginname) => {
	let { success, error_msg, data } = await fetchJSON(`/user/${loginname}`)

	if (!success) {
		throw new Error(error_msg)
	}

	return data
}

export let addTopic = async (topic) => {
	let url = '/topics'
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify(topic),
	}
	let { success, error_msg, topic_id } = await fetchJSON(url, options)

	if (!success) {
		throw new Error(error_msg)
	}

	return topic_id
}


export let getMessages = async (accesstoken) => {
	let url = `/messages?accesstoken=${accesstoken}`
	let { success, error_msg, data } = await fetchJSON(url)

	if (!success) {
		throw new Error(error_msg)
	}

	return data
}

export let markAllMessages = async (accesstoken) => {
	let url = `/message/mark_all`
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify({ accesstoken }),
	}
	let { success } = await fetchJSON(url, options)

	if (!success) {
		throw new Error(error_msg)
	}

	return success
}

export let upsReply = async ({ replyId, accesstoken }) => {
	let url = `/reply/${replyId}/ups`
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify({ accesstoken }),
	}
	let { success, action, error_msg } = await fetchJSON(url, options)

	if (!success) {
		throw new Error(error_msg)
	}

	return action
}

export let addReply = async ({ topicId, accesstoken, content, replyId }) => {
	let url = `/topic/${topicId}/replies`
	let body = {
		accesstoken,
		content,
	}
	if (replyId) {
		body['reply_id'] = replyId
	}
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify(body),
	}

	let { success, error_msg, reply_id } = await fetchJSON(url, options)

	if (!success) {
		throw new Error(error_msg)
	}

	return reply_id
}

export let readPic = async (img) => {
	let url = 'http://m.yueqingwang.com/common.ashx'
	let options = {
		method: 'POST',
		body: JSON.stringify({ img }),
	}
	let response = await fetch(url, options)
	let token = await response.text()

	if (token !== 'qrcode error') {
		throw new Error('二维码图片不清晰')
	}
	return token
}
