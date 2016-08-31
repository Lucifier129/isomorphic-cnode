import http from 'http'
import fs from 'fs'
import path from 'path'

import routes from './src/routes'
import createApp from '../create-app/src/server'
import ReactDOMServer from 'react-dom/server'

let serverRoutes = routes.map(route => {
    let controller = path.join(__dirname, './src', route.controller)
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

let indexFile = fs.readFileSync('./layout.html').toString()

let server = http.createServer(async function(req, res) {
    let url = replaceRoot(req.url)

    res.on('error', logError)

    // handle favicon.ico
    if (url.indexOf('/favicon.ico') !== -1) {
    	res.writeHead(200, {
            'Content-Type': 'image/ico',
        })
        readFile('./client/favicon.ico').pipe(res)
    	return
    }

    let contentType = getContentType(url)

    // handle static file
    if (contentType) {
        let file = path.join(__dirname, 'client', url)
        res.writeHead(200, {
            'Content-Type': contentType,
        })
        readFile(file).pipe(res)
        return
    }

    // handle page
    try {
        let content = await app.render(url)
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