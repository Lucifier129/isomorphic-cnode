import Controller from '../../share/BaseController'
import View from './view'
import * as actions from './model'
import { openMenu, closeMenu } from '../../share/methods'

export default class extends Controller {
    name = 'Message'
    needLogin = true
    View = View
    actions = actions
    initialState = {
        showMenu: false,
        user: {},
        selectItem: 'hasnot_read',
        currentData: [],
    }

    methods = {
    	openMenu,
        closeMenu,

        changeItem({ currentTarget }) {
            let { UPDATE_FIELD } = this.store.actions
            let selectItem = currentTarget.getAttribute('data-type')

            UPDATE_FIELD({
                key: 'selectItem',
                value: selectItem,
            })
        },
        async markAll() {
            let { MARK_ALL_MESSAGES, INIT } = this.store.actions
            try {
                await MARK_ALL_MESSAGES()
                await INIT()
            } catch(error) {
                alert(error.message)
            }
        }
    }
}