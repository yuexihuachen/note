import Koa from 'koa'
import init from './middleware/index'
const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.url}`);
    await next()
})

init(app)

app.listen(3000);