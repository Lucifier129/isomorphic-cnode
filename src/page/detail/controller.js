import Controller from '../../share/BaseController'
import View from './view'
import * as actions from './model'
import { openMenu, closeMenu } from '../../share/methods'

export default class extends Controller {
    name = 'Detail'
    View = View
    actions = actions
    initialState = {
        showMenu: false,
        topic: null,
        curReplyId: null,
        replyToReply: '',
        replyToTopic: '',
        suffix: `
        <br/>
        来自 <a class="from" href="https://github.com/Lucifier129/create-app">isomorphic-cnode</a>
        `,
    }

    methods = {
        openMenu,
        closeMenu,

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
