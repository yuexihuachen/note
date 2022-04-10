import Router from 'koa-router'
import koaCompose from "koa-compose"
import routes from '../routes/index'
import path from 'path'
import { loadFile } from '../lib/utils'

const router = new Router()
const map = new Map()

export default () => {
    /**
     * 根据配置的路由映射到对应的控制器
     */
    routes.forEach(route => {
        const { method = 'get', match, controller } = route
        const fileName = controller.split('.')
        const rootPath = path.resolve(__dirname, `../controllers/${fileName[0]}.js`)
        // 避免重复加载
        if (!map.has(fileName[0])){
            map.set(fileName[0], loadFile(rootPath))
        }
        const currentFun = map.get(fileName[0])[fileName[1]]
        router[method].call(router, match, currentFun)
    })
    return koaCompose([router.routes(),router.allowedMethods()])
}