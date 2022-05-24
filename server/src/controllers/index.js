"use strict";
import DbClass from "../lib/DbHelper";
const sqlite3 = new DbClass();

async function index(ctx, next) {
    ctx.logger.error('hello')
    await ctx.render('index')
}

async function home(ctx, next) {
    await ctx.render('home')
}


async function update(ctx, next) {
    await ctx.renderJSON({
        hello:'update'
    })
}

export {
    index,
    home,
    update
}