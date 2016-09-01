import express from 'express'
import favicon from 'serve-favicon'

import fs from 'fs'
import path from 'path'

import createApp from '../create-app/src/server'
import { renderToString } from 'react-dom/server'
import routes from './src/routes'

let commonjsLoader = url => {
    let module = require(path.join(__dirname, './src', url))
    return module.default || module
}

let shareSettings = {
    type: 'createHistory',
    basename: '/isomorphic-cnode',
}

let appSettings = {
    ...shareSettings,
    loader: commonjsLoader,
    routes: routes,
    viewEngine: {
        render: renderToString,
    },
    context: {
        isClient: false,
        isServer: true,
    },
}

let layoutOptions = {
    publicPath: '/static',
    config: shareSettings,
    initialState: '',
}

let app = createApp(appSettings)

let server = express()
server.use(layoutOptions.publicPath, express.static(path.join(__dirname, './client')))
server.use(favicon(path.join(__dirname, './client/favicon.ico')))

// handle page
server.get('*', async (req, res) => {
    let url = replaceBasename(req.url)
    try {
        let content = await app.render(url)
        let controller = app.getCurrentController()
        let initialState = renderInitialState(controller.store.getState())
        let html = renderLayout({ ...layoutOptions, content, initialState })
        res.end(html)
    } catch (error) {
        res.writeHead(500)
        res.end(error.stack)
    }
})

let port = process.env.PORT || 3002

server.listen(port, () => {
    console.log(`server started at localhost:${port}${shareSettings.basename}`)
})

let layout = fs.readFileSync('./layout.html', 'utf-8')
function renderLayout(options) {
    return Object.keys(options).reduce((html, key) => {
        let value = typeof options[key] === 'string' ? options[key] : JSON.stringify(options[key])
        return html.replace(new RegExp(`{{ ${key} }}`, 'g'), value)
    }, layout)
}

function renderInitialState(initialState) {
    return `<script>window.__INITIAL_STATE__=${JSON.stringify(initialState)}</script>`
}

function replaceBasename(inputUrl) {
    if (inputUrl.indexOf(shareSettings.basename) === 0) {
        return inputUrl.substr(shareSettings.basename.length)
    }
    return inputUrl
}