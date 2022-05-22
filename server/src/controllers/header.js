"use strict";

async function allPage(ctx, next) {
    ctx.state.scope.matchPage = ctx.params.page
    await ctx.render('index')
}

export {
    allPage
}