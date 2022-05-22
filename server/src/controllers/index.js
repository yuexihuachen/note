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

async function search(ctx, next) {
    await ctx.renderJSON({
        response: {
            data: {
                list: [{
                    name: 'longwang',
                    age: 32
                }],
            },
            name:'service api',
            message: 'success',
            code: 1
        }
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