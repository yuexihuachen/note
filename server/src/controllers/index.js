async function index(ctx, next) {
    await ctx.render('index')
}

export {
    index
}