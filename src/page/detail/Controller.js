import Controller from '../../shared/BaseController'
import View from './View'
import * as Model from './Model'

export default class extends Controller {
    KeepAlive = true
    View = View
    Model = Model

    async componentWillCreate() {
        let { COMPONENT_WILL_CREATE } = this.store.actions
        let state = this.store.getState()
        let topicId = state.location.params.topicId
        let { data: topic } = await this.get(`/topic/${topicId}`)
        COMPONENT_WILL_CREATE({ topic })
    }

    handleToggleReplyForm = ({ currentTarget }) => {
        let { TOGGLE_REPLY_FORM } = this.store.actions
        let activeReplyId = currentTarget.getAttribute('data-id')
        TOGGLE_REPLY_FORM({ activeReplyId })
    }

    isLiking = false
    handleLikeReply = async ({ currentTarget }) => {

        if (this.isLiking) {
            return
        }

        let replyId = currentTarget.getAttribute('data-id')
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



    methods = {

        updateReplyToReply({ currentTarget }) {
            let { UPDATE_FIELD } = this.store.actions
            let { value } = currentTarget

            UPDATE_FIELD({
                key: 'replyToReply',
                value,
            })
        },
        updateReplyToTopic({ currentTarget }) {
            let { UPDATE_FIELD } = this.store.actions
            let { value } = currentTarget

            UPDATE_FIELD({
                key: 'replyToTopic',
                value,
            })
        },

        isLogin() {
            let { userInfo, location } = this.store.getState()
            if (userInfo.id) {
                return true
            }
            this.goTo(`/login?redirect=${location.raw}`)

            return false
        },
        async upReply({ currentTarget }) {
            if (!this.isLogin()) {
                return
            }

            let { UPDATE_FIELD, UPS_REPLAY } = this.store.actions
            let replyId = currentTarget.getAttribute('data-id')

            try {
                await UPS_REPLAY(replyId)
            } catch (error) {
                alert(error.message)
            }
        },
        showReply({ currentTarget }) {
            if (!this.isLogin()) {
                return
            }

            let { UPDATE_FIELDS } = this.store.actions
            let { curReplyId, topic } = this.store.getState()
            let replyId = currentTarget.getAttribute('data-id')
            let [{ author }] = topic.replies.filter(reply => reply.id === replyId)

            if (curReplyId === replyId) {
                return
            }

            UPDATE_FIELDS([{
                key: 'curReplyId',
                value: replyId,
            }, {
                key: 'replyToReply',
                value: `@${author.loginname} `
            }])
        },
        async addReply({ currentTarget }) {
            if (!this.isLogin()) {
                return
            }
            let { ADD_REPLY } = this.store.actions
            let replyId = currentTarget.getAttribute('data-reply')
            try {
                await ADD_REPLY(replyId)
            } catch (error) {
                alert(error.message)
            }
        },
    }
}
