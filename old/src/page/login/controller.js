import Controller from '../../share/BaseController'
import View from './view'
import * as actions from './model'
import { openMenu, closeMenu } from '../../share/methods'

export default class extends Controller {
    name = 'Login'
    View = View
    actions = actions
    initialState = {
        showMenu: false,
        token: '',
        alertText: '',
        showLoading: false,
    }

    methods = {
        openMenu,
        closeMenu,
        hideAlert() {
            let { UPDATE_FIELD } = this.store.actions
            UPDATE_FIELD({
                key: 'alertText',
                value: '',
            })
        },
        showAlert(text) {
            let { UPDATE_FIELD } = this.store.actions
            UPDATE_FIELD({
                key: 'alertText',
                value: text,
            })
            setTimeout(this.hideAlert, 1000)
        },
        switchLoading(status=false) {
            let { UPDATE_FIELD } = this.store.actions
            UPDATE_FIELD({
                key: 'showLoading',
                value: status,
            })
        },
        async login() {
            let { UPDATE_FIELD, FETCH_USER_INFO } = this.store.actions
            let { token, location } = this.store.getState()

            if (!token) {
                this.showAlert('令牌格式错误, 应为36位UUID字符串')
                return
            }

            try {
                let { userInfo, token } = await FETCH_USER_INFO()
                localStorage.setItem('userInfo', JSON.stringify({
                    ...userInfo,
                    token,
                }))
                let targetPath = location.query.redirect || `/user/${userInfo.loginname}`
                this.goReplace(targetPath)
            } catch (error) {
                this.showAlert(error.message)
            }
        },
        handleInput({ currentTarget }) {
            let { UPDATE_FIELD } = this.store.actions

            UPDATE_FIELD({
                key: 'token',
                value: currentTarget.value,
            })
        },
        async readPic({ currentTarget }) {
            let { GET_TOKEN_BY_IMG, UPDATE_FIELD } = this.store.actions
            let file = currentTarget.files[0]
            let reader = new FileReader()

            reader.onload = async () => {
                let dataURL = reader.result
                let base64 = dataURL.replace('base64,', '')

                this.switchLoading(true)

                try {
                    await GET_TOKEN_BY_IMG(base64)
                } catch (error) {
                    this.showAlert(error.message)
                } finally {
                    this.switchLoading(false)
                }
            }
            reader.readAsDataURL(file)
        },
    }
}