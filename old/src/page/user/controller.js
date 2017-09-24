import Controller from '../../share/BaseController'
import View from './view'
import * as actions from './model'
import { openMenu, closeMenu } from '../../share/methods'

export default class extends Controller {
    name = 'User'
    View = View
    actions = actions
    initialState = {
        showMenu: false,
        user: {},
        selectItem: 'replies',
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
    }
}