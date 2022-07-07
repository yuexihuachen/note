"use strict";
import { checkLogin } from './login'
import DbClass from "../lib/DbHelper";
const sqlite3 = new DbClass();

let result = {
    message: "failed",
    data: []
};

/**
 * 文章类别
 * @param {*} ctx 
 * @param {*} next 
 * @returns array
 */
async function category(ctx, next) {
    const category = await sqlite3.selectTable('category', ['*'])
    await ctx.renderJSON(category)
}

/**
 * 查询用户信息
 * @param {*} ctx koa上下文
 * @param {*} params 用户名 密码
 * @returns 查询结果
 */
 async function checkUser(ctx, {
     uname,
     pwd
 }) {
    const data = await sqlite3.selectTable('users', ['user_id'], {
        user_name: uname,
        pwd: pwd
    })
    return data;
  }

/**
 * 新增文章
 * @param {*} ctx 
 * @param {*} next 
 * @returns 
 */
async function setArticle(ctx, next) {
    const { data: { isLogin } } = await checkLogin(ctx, next)
    if (!isLogin) {
        result.message = 'not login'
        return ctx.renderJson(result);
    }
    const { id, category, title, content, isPush } = ctx.request.body;
    console.log(content)
    let response = null
    if (id) {
      response = await sqlite3.updateTableRows("article", {
        title,
        content,
        category_id: category,
        is_push: isPush,
      }, {
        article_id: id
      });
    } else {
      response = await sqlite3.insertTable("article", {
        title,
        content: encodeURIComponent(content),
        category_id: category,
        is_push: isPush,
      });
    }
    if (response.message.includes("success")) {
      result = {
        data: response.data,
        message: "success"
      };
    }
    await ctx.renderJson(result);
}

export {
    category,
    checkUser,
    setArticle
}