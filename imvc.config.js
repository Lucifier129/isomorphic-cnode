import path from 'path'

export default {
    restapi: 'https://cnodejs.org/api/v1',
    favicon: path.join(__dirname, 'favicon.ico'),
    staticEntry: 'index.html',
    alias: process.env.NODE_ENV === 'production' ? {
        'react': 'react-lite',
        'react-dom': 'react-lite',
    } : {},
}