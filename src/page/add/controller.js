import Controller from '../../share/BaseController'
import View from './view'
import * as actions from './model'
import { openMenu, closeMenu } from '../../share/methods'

export default class extends Controller {
    name = 'Add'
    needLogin = true
    View = View
    actions = actions
    initialState = {
        showMenu: false,
        tabs: [{
            type: 'share',
            text: '分享',
        }, {
            type: 'ask',
            text: '问答',
        }, {
            type: 'job',
            text: '招聘',
        }],
        tab: 'share',
        title: '',
        content: '',
        err: '',
        topic_id: '',
        suffix: `
        <br/>
        来自 <a class="from" href="https://github.com/Lucifier129/create-app">isomorphic-cnode</a>
        `,
    }

    methods = {
        openMenu,
        closeMenu,

        async addTopic() {
            let { UPDATE_FIELD, ADD_TOPIC } = this.store.actions
            let { title, content } = this.store.getState()

            if (title.trim().length < 10) {
                return UPDATE_FIELD({
                    key: 'err',
                    value: 'title',
                })
            } else if (content.trim() === '') {
                return UPDATE_FIELD({
                    key: 'err',
                    value: 'content',
                })
            }

            try {
                let { topic_id } = await ADD_TOPIC()
                this.goReplace(`/topic/${topic_id}`)
            } catch (error) {
                alert(error.message)
            }
        },
        updateTitle({ currentTarget }) {
            let { UPDATE_FIELDS } = this.store.actions
            let { value } = currentTarget

            UPDATE_FIELDS([{
                key: 'title',
                value,
            }, {
                key: 'err',
                value: '',
            }])

        },
        updateContent({ currentTarget }) {
            let { UPDATE_FIELDS } = this.store.actions
            let { value } = currentTarget

            UPDATE_FIELDS([{
                key: 'content',
                value,
            }, {
                key: 'err',
                value: '',
            }])
        },
        updateTab({ currentTarget }) {
            let { UPDATE_FIELDS } = this.store.actions
            let { value } = currentTarget

            UPDATE_FIELDS([{
                key: 'tab',
                value,
            }, {
                key: 'err',
                value: '',
            }])
        },
    }
}
