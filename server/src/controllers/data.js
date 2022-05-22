"use strict";
import DbClass from "../lib/DbHelper";
const sqlite3 = new DbClass();

async function category(ctx, next) {
    const category = await sqlite3.selectTable('category', ['*'])
    await ctx.renderJSON(category)
}

export {
    category
}