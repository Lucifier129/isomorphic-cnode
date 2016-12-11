import fs from 'fs'
import path from 'path'
import express from 'express'
import favicon from 'serve-favicon'
import createApp from 'create-app/lib/server'
import { renderToString } from 'react-dom/server'
import routes from './src/routes'

let defaults = {
    publicPath: '/static',
    config: {
        type: 'createHistory',
        basename: '/isomorphic-cnode',
    },
    initialState: 'undefined',
    content: '',
}

let app = createApp({
    ...defaults.config,
    loader: module => module.default || module,
    routes: routes,
    viewEngine: {
        render: renderToString,
    },
    context: {
        isClient: false,
        isServer: true,
    },
})

let server = express()
server.use(defaults.publicPath, express.static(path.join(__dirname, './docs')))
server.use(favicon(path.join(__dirname, './docs/favicon.ico')))

// handle page
server.get('*', async (req, res) => {
    let url = replaceBasename(req.url)
    try {
        let { content, controller } = await app.render(url)
        let initialState = controller.store.getState()
        let html = renderLayout({
            ...defaults,
            content,
            initialState,
        })
        res.end(html)
    } catch (error) {
        res.writeHead(500)
        res.end(error.stack)
    }
})

let port = process.env.PORT || 3002

server.listen(port, () => {
    console.log(`server started at localhost:${port}${defaults.config.basename}`)
})

let layout = fs.readFileSync('./layout.html', 'utf-8')
function renderLayout(options) {
    return Object.keys(options).reduce((html, key) => {
        let value = typeof options[key] === 'string' ? options[key] : JSON.stringify(options[key])
        return html.replace(new RegExp(`{{ ${key} }}`, 'g'), value)
    }, layout)
}

function replaceBasename(inputUrl) {
    if (inputUrl.indexOf(defaults.config.basename) === 0) {
        return inputUrl.substr(defaults.config.basename.length)
    }
    return inputUrl
}