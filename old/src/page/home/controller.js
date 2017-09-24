import Controller from '../../share/BaseController'
import View from './view'
import * as actions from './model'
import { openMenu, closeMenu } from '../../share/methods'

export default class extends Controller {
    name = 'List'
    View = View
    actions = actions
    initialState = {
    	topics: [],
        showMenu: false,
        searchKey: {
            page: 1,
            limit: 20,
            tab: 'all',
            mdrender: true
        },
        userInfo: {},
    }

    isFetching = false
    methods = {
        openMenu,
        closeMenu,
        async handleScroll() {
            let { showMenu } = this.store.getState()
            if (this.isFetching || showMenu) {
                return
            }
            let scrollHeight = window.innerHeight + window.scrollY
            let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight

            if (pageHeight - scrollHeight <= 200) {
                let { FETCH_NEXT_TOPICS } = this.store.actions
                this.isFetching = true
                await FETCH_NEXT_TOPICS()
                this.isFetching = false
            }
        },
    }
}
