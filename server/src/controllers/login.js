"use strict";
import { checkUser } from './data'
import { cache, guid } from '../lib/utils'
import DbClass from "../lib/DbHelper";
const sqlite3 = new DbClass();

let result = {
    message: "failed",
    data: []
};

async function update(ctx, next) {
    await ctx.renderJson({
        login: 'login update hello 123'
    })
}

async function write(ctx, next) {
    await ctx.render('write')
}

/**
 * 是否登录
 * @param {*} ctx koa上下文
 * @param {*} next 路由
 * @returns isLogin 0: 未登录， 1，登录
 */
async function checkLogin(ctx, next) {
    let isLogin = 0;
    let cacheToken = cache.get("token");
    let cookieToken = ctx.cookies.get("token");
    if (cacheToken && cacheToken.length && cacheToken === cookieToken) {
        isLogin = 1;
    }
    return {
        data: {
            isLogin
        },
        message: 'success'
    }
}

/**
 * 判断当前环境是否登录
 * @param {*} ctx koa上下文
 * @param {*} next 路由
 * @returns isLogin 0: 未登录， 1，登录
 */
async function isLogin(ctx, next) {
    const data = await checkLogin(ctx, next)
    await ctx.renderJSON(data)
}

/**
 * 用户登录
 * @param {*} ctx koa上下文
 * @param {*} params 用户名 密码
 * @returns 查询结果
 */
async function Login(ctx, next) {
    const query = ctx.request.body;
    const date = new Date();
    const time = `${date.getFullYear()}${date.getMonth() + 1}`
    let pwds = []
    if (query.pwd.includes('#')) {
        pwds = query.pwd.split('#')
    }
    let result = {
        data: null,
        message: 'failed'
    }
    const data = await checkUser(ctx, {
        uname: query.uname,
        pwd: pwds[0]
    })

    if (time === pwds[1] && data.data.length && data.data[0].user_Id) {
        result = {
            data: data,
            message: 'success'
        }
        const token = guid(5);
        cache.set('token', token, 21600);
        ctx.cookies.set("token", token, {
            domain: ctx.hostname,
            path: '/',
            maxAge: 21600000,
            overwrite: true
        });
    }

    await ctx.renderJSON(result);
}

/**
 * 搜索page
 * @param {*} ctx 
 * @param {*} next 
 */
async function search(ctx, next) {
    await ctx.render('search')
}

/**
 * 关键字搜索笔记
 * @param {*} ctx 
 * @param {*} next 
 * @returns 
 */
async function searchNote(ctx, next) {
    const { data: { isLogin } } = await checkLogin(ctx, next)
    if (!isLogin) {
        result.message = 'not login'
        return ctx.renderJson(result);
    }
    const { category, title, isPush } = ctx.request.body;
    let conditions = {}, extendSql =''
    if (category) {
        conditions.category_id = category
    }
    if (title) {
        extendSql = `title like '%${title}%'`
    }
    if (isPush) {
        conditions.is_push = isPush
    }

    const response = await sqlite3.selectTable("article", [ 'article_id','title', 'category_id', 'is_push' ], conditions, extendSql);
    if (response.message.includes("success")) {
      result = {
        data: response.data,
        message: "success"
      };
    }
    await ctx.renderJson(result);
}


export {
    Login,
    update,
    write,
    isLogin,
    checkLogin,
    search,
    searchNote
}