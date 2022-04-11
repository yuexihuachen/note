"use strict";
async function index(ctx, next) {
    await ctx.render('index')
}

async function home(ctx, next) {
    await ctx.render('home')
}


async function search(ctx, next) {
    await ctx.renderJSON({
        hello:'search'
    })
}


async function update(ctx, next) {
    await ctx.renderJSON({
        hello:'update'
    })
}

export {
    index,
    home,
    search,
    update
}