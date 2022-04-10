import koaBody from './bodyParser'
import compress from './compress'
import koaView from './render'
import routes from './router'
import helmet from './helmet'
import compose from "koa-compose"

const middleware = compose(
    [
        helmet(),
        koaView,
        koaBody(),
        compress(),
        routes()
    ]
)

export default app => {
    app.use(middleware);
}