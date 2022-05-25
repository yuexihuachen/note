"use strict";

async function allPage(ctx, next) {
    ctx.state.scope.matchPage = ctx.params.page
    const category = ctx.state.scope.category
    let pagePath = 'index'
    if (!category.find(item => item.alias_name === ctx.params.page)) {
        pagePath = 'error'
    }
    await ctx.render(pagePath)
}

export {
    allPage
}