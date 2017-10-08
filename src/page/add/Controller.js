import Controller from "../../shared/BaseController";
import View from './View'
import * as Model from './Model'

export default class extends Controller {
    KeepAlive = true
    NeedLogin = true
    View = View
    Model = Model

    handlePublish = async () => {
        let state = this.store.getState()
        let accesstoken = this.cookie('accesstoken')
        let params = {
            accesstoken,
            title: state.title,
            tab: state.tab,
            content: state.content,
        }
        let url = '/topics'
        
        this.showLoading('发布中……')

        try {
            let { topic_id } = await this.post(url, params)
            let targetPath = `/topic/${topic_id}`
            this.removeFromCache()
            this.history.replace(targetPath)
        } catch(error) {
            this.showAlert(error.message)
        }

        this.hideLoading()
    }
}