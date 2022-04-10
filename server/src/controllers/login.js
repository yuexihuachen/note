async function login(ctx, next) {
    await ctx.renderJson({
        login: 'login'
    })
}

async function update(ctx, next) {
    ctx.body = await ctx.renderString('home')
}


export {
    login,
    update
}