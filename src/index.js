import 'isomorphic-fetch'
import ReactDOM from 'react-dom'
import Fastclick from 'fastclick'
import createApp from 'create-app/lib/client'
import routes from './routes'

__webpack_public_path__ = __PUBLIC_PATH__
const config = window.__CONFIG__

const webpackLoader = (loadModule) => (
    new Promise(loadModule)
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

const app = createApp({
	...config,
	hashType: 'hashbang',
	container: '#root',
	context: {
		...config.context,
		isClient: true,
		isServer: false,
	},
	loader: webpackLoader,
	routes,
	viewEngine,
})

app.start()

if ('ontouchstart' in document) {
	Fastclick.attach(document.body)
}