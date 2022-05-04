"use strict";
import header from './header'

export default async function index(scope, ctx) {
    scope.title = '技术博客'
    await header(scope, ctx);
}