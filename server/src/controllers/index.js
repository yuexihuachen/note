"use strict";
import DbClass from "../lib/DbHelper";
const sqlite3 = new DbClass();

let result = {
    message: "failed",
    data: []
};

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

/**
 * 搜索笔记
 * @param {*} ctx 
 * @param {*} next 
 * @returns 
 */
 async function checkNote(ctx, next) {
    let searchParams = [ 'article_id','title', 'category_id', 'is_push' ]
    const { article_id, category, title, isPush } = ctx.request.body;
    let conditions = {}, extendSql =''
    if (category) {
        conditions.category_id = category
    }
    if (title) {
        extendSql = `title like '%${title}%'`
    }
    if (isPush > -1) {
        conditions.is_push = isPush
    }
    if (article_id) {
        conditions.article_id = article_id
        searchParams.push('content')
    }

    const response = await sqlite3.selectTable("article", searchParams, conditions, extendSql);
    if (response.message.includes("success")) {
      result = {
        data: response.data,
        message: "success"
      };
    }
    await ctx.renderJson(result);
}

export {
    index,
    home,
    update,
    checkNote
}