import http from 'http'
import fs from 'fs'
import path from 'path'
import url from 'url'
import querystring from 'querystring'

import routes from './javascript/routes'
import createApp from '../../src/server'
import ReactDOMServer from 'react-dom/server'

let serverRoutes = routes.map(route => {
    let controller = path.join(__dirname, 'javascript', route.controller)
    return {
        path: route.path,
        controller: controller,
    }
})

let commonjsLoader = url => {
    let module = require(url)
    return module.default || module
}

let viewEngine = {
    render: ReactDOMServer.renderToString
}
let basename = '/isomorphic-cnode'
let appSettings = {
    basename: basename,
    viewEngine: viewEngine,
    loader: commonjsLoader,
    routes: serverRoutes,
    context: {
        isClient: false,
        isServer: true,
    },
}

let app = createApp(appSettings)

let indexFile = fs.readFileSync('server.html').toString()

let server = http.createServer(async function(req, res) {

    res.on('error', logError)

    // handle favicon.ico
    if (req.url.indexOf('/favicon.ico') !== -1) {
    	res.writeHead(200, {
            'Content-Type': 'image/ico',
        })
        readFile('./favicon.ico').pipe(res)
    	return
    }

    let contentType = getContentType(req.url)

    // handle static file
    if (contentType) {
        let filepath = replaceRoot(req.url)
        let file = path.join(__dirname, filepath)
        res.writeHead(200, {
            'Content-Type': contentType,
        })
        readFile(file).pipe(res)
        return
    }

    try {
        let content = await app.render(req.url)
        res.writeHeader(200, {
            'Content-Type': 'text/html'
        })
        res.end(render(content))
    } catch (error) {
        // handle 404
        res.writeHead(404)
        res.end(error.message)
    }
})

let port = 3002

server.listen(port)

console.log(`server start at ${port}`)

function readFile(file) {
    return fs.createReadStream(file)
}

function render(content) {
    return indexFile.replace(`<div id="root"></div>`, `<div id="root">${content}</div>`)
}

function logError(error) {
	console.error(error)
}

let mime = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
}

function getContentType(inputPath) {
    let extname = path.extname(inputPath)
    if (extname && mime.hasOwnProperty(extname)) {
        return mime[extname]
    }
}

function replaceRoot(inputUrl) {
	if (inputUrl.indexOf(basename) === 0) {
		return inputUrl.substr(basename.length)
	}
	return inputUrl
}