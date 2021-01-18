import * as express from 'express'
import * as http from 'http'

import admin from './endpoints/admin/server'
import root from './endpoints/root/server'

const logMessages: string[] = []

const app: express.Express = express()
app.set('port', 3007)

let protocol = 'http'
let server = http.createServer(app)

admin.applyMiddleware({ app, path: '/admin' })
root.applyMiddleware({ app, path: '/' })

server.listen(app.get('port'), () => {
  logMessages.push(
    `🚀${protocol}://localhost:${app.get('port')}${root.graphqlPath}`,
  )
  logMessages.push(
    `🚀 Admin: ${protocol}://localhost:${app.get('port')}${admin.graphqlPath}`,
  )
  logMessages.map((message) => console.log(message))
})
