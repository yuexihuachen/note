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


export {
    login,
    update
}