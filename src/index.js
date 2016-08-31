import 'isomorphic-fetch'
import ReactDOM from 'react-dom'
import Fastclick from 'fastclick'
import createApp from 'create-app/client'
import routes from './routes'

const webpackLoader = (url) => (
    new Promise(require(url))
    .then(module => module.default || module)
)

const viewEngine = {
	render(component, container) {
		console.time('render')
		let result = ReactDOM.render(component, container)
		console.timeEnd('render')
		return result
	},
}

const appSettings = {
	type: 'createHistory',
	hashType: 'hashbang',
	basename: '/isomorphic-cnode',
	container: '#root',
	context: {
		isClient: true,
		isServer: false,
	},
	loader: webpackLoader,
	routes,
	viewEngine,
}

const app = createApp(appSettings)

app.start()

if ('ontouchstart' in document) {
	Fastclick.attach(document.body)
}