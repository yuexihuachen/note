async function index(ctx, next) {
    await ctx.render('home')
}

export {
    index
}