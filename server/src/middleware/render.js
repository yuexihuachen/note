import nunjucks from 'nunjucks'
import path from "path"
import fs from "fs"

/**
 * render 使用html路径家在模版
 * renderString 使用字符串模版
 */
export default async (ctx, next) => {
    
    /**
     *  为啥放外面，因为build transform es5的时候不处理html
     * @param {String} pageName 页面名称
     * @returns 页面地址
     */
    const tpl = pageName => {
        return path.resolve(__dirname, `../../views/${pageName}/index.html`)
    }

    const render = async (name, scope) => {
        return new Promise((resolve, reject) => {
            nunjucks.render(name, scope, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }

    const renderString = async (src, scope) => {
        return new Promise((resolve, reject) => {
            nunjucks.renderString(src, scope, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }
    /**
     * 
     * @param {String} pageName 加载page的视图
     * @reture 返回html
     */
    ctx.render = async (pageName) => {
        let scope = ctx.state.scope || {}
        scope = {
            ...{
                title: 'Technical blog',
                keywords: 'Front-end, back-end, linux, database, algorithm, design pattern',
                description: 'study without limit'
            },
            ...scope
        }
        const html = await render(tpl(pageName), scope)
        ctx.state.scope = null
        ctx.body = html.trim().replace(/\n\s*/gmi, '')
    }
    /**
     * 渲染一个原始字符串而不是加载一个模板。不允许用户定义自己的模板
     * @param {String} pageName 加载page的视图
     * @reture 返回html
     */
    ctx.renderString = async (pageName) => {
        const scope = ctx.state.scope
        const template = fs.readFileSync(tpl(pageName))
        ctx.state.scope = null
        return await renderString(template.toString(), scope)
    }

    /**
     * @param {Object} 返回的数据
     * 
     */
    ctx.renderJSON = ctx.renderJson = async (data) => {
        ctx.body = JSON.stringify(data)

    }

    await next()
}

