"use strict";
import Sqlite3 from 'sqlite3';
let db;

export default class DbClass {
  constructor(){
    this.createDb()
  }
  createDb(DBname = 'note') {
    return new Promise((resolve, reject) => {
      if (!db) {
        const sqlite3 = Sqlite3.verbose();
        db = new sqlite3.Database(`server/DB/${DBname}.sqlite3`);
      }
      if (!db) return reject('create db error');
      resolve(db);
    });
  }

  createTable(tableName, options) {
    let sqlParams = ''
    for (const key in options) {
      sqlParams += `${key} ${options[key]},`
    }
    sqlParams = sqlParams.slice(0, sqlParams.length - 1)
    return new Promise((resolve, reject) => {
      let sql = `CREATE TABLE IF NOT EXISTS ${tableName} (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
        ${sqlParams}
        )`
      db.run(sql, function (err) {
        if (err) return reject(`create Tbale ${tableName} failed`);
        resolve('success');
      });

    });
  }

  insertTable(tableName, options) {
    let sqlKeys = '', sqlValues = '';
    for (const key in options) {
      sqlKeys += `${key},`
      sqlValues += `"${options[key]}",`
    }
    sqlKeys = sqlKeys.slice(0, sqlKeys.length - 1)
    sqlValues = sqlValues.slice(0, sqlValues.length - 1)
    const stmt = db.prepare(`INSERT INTO ${tableName}(${sqlKeys}) VALUES (${sqlValues})`);
    return new Promise((resolve, reject) => {
      stmt.run(function (err) {
        if (err) return reject(`insert Tbale ${tableName} failed`);
        resolve({
          data: 'add success',
          message: 'success'
        });
      });
    });
  }

  deleteTableRows(tableName, options) { // 一条数据
    let sqlParams = ''
    for (const key in options) {
      sqlParams += `${key}=${options[key]}`
    }
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM ${tableName} WHERE ${sqlParams}`, function (err, rows) {
        if (err) return reject(`delete Tbale ${tableName} rows failed`);
        resolve({
          message: 'success',
          data: rows
        });
      });
    });
  }

  updateTableRows(tableName, options, conditions) { // 一条数据
    let sqlKeys = '', newOptions = {};
    for (const key in options) {
      sqlKeys += `${key}=$${key},`
      newOptions[`$${key}`] = options[key]
    }
    sqlKeys = sqlKeys.slice(0, sqlKeys.length - 1)
    let sqlConditions = ''
    for (const key in conditions) {
      sqlConditions += `${key}=$${key} `
      newOptions[`$${key}`] = conditions[key]
    }
    return new Promise((resolve, reject) => {
      db.run(`UPDATE ${tableName} SET ${sqlKeys} WHERE ${sqlConditions}`, newOptions, function (err, rows) {
        if (err) return reject(`update Tbale ${tableName} rows failed`);
        resolve({
          message: 'success',
          data: rows
        });
      });
    })
    
  }

  selectTable(tableName, params, conditions, extendSql = '') {
    // 查询的参数名称
    let sqlParams = params.join(',')
    // 查询的条件
    let sqlConditions = '', newOptions = {}
    for (const key in conditions) {
      sqlConditions += `${key}=$${key} AND `
      newOptions[`$${key}`] = conditions[key]
    }
    if (sqlConditions.length) {
      sqlConditions = ` WHERE ${sqlConditions.slice(0, sqlConditions.length - 4)}`
    }
    if (!sqlConditions.length && extendSql.length) {
      extendSql = ` WHERE ${extendSql}`
    } else if (sqlConditions.length && extendSql.length) {
      extendSql = ` AND ${extendSql}`
    }

    // extendSql 扩展条件
    return new Promise((resolve, reject) => {
      db.all(`SELECT ${sqlParams} FROM ${tableName} ${sqlConditions} ${extendSql}`, newOptions, function (err, rows) {
        if (err) return reject(`select Tbale ${tableName} failed`);
        resolve({
          message: 'success',
          data: rows
        });
      });
    })
  }
}