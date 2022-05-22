"use strict";
async function login(ctx, next) {
    await ctx.renderJson({
        login: 'login'
    })
}

async function update(ctx, next) {
    await ctx.renderJson({
        login: 'login update hello 123'
    })
}

async function write(ctx, next) {
    await ctx.render('write')
}


export {
    login,
    update,
    write
}