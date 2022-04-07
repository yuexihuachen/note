import Router from 'koa-router'
import compose from "koa-compose"
import koaBody from './bodyParser'
import compress from './compress'
import koaView from './view'
import routes from '../routes/index'

const router = new Router()
const middleware = compose([koaView, koaBody(),compress()])

export default app => {
    app.use(middleware);
    app.use(async (ctx, next) => {
        await routes(router)
        await next()
      })
      
    app.use(router.routes())
    app.use(router.allowedMethods())
}