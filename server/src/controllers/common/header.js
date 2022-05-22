"use strict";
import DbClass from "../../lib/DbHelper";
const sqlite3 = new DbClass();

export default async function index(scope, ctx) {
    const category = await sqlite3.selectTable('category', ['*'])
    scope.category = category.data
    scope.keywords = 'Front-end, back-end, linux, database, algorithm, design pattern'
}