"use strict";
import Sqlite3 from "sqlite3";
let db;

class DbClass {
  createDb(DBname = "localdb") {
    return new Promise((resolve, reject) => {
      if (!db) {
        console.log(`createDb ${DBname}`);
        const sqlite3 = Sqlite3.verbose();
        db = new sqlite3.Database(`server/DB/${DBname}.sqlite3`);
      }
      if (!db) return reject("create db error");
      resolve(db);
    });
  }

  createTable(tableName, options) {
    let sqlParams = "";
    for (const key in options) {
      sqlParams += `${key} ${options[key]},`;
    }
    sqlParams = sqlParams.slice(0, sqlParams.length - 1);
    return new Promise((resolve, reject) => {
      let sql = `CREATE TABLE IF NOT EXISTS ${tableName} (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
        ${sqlParams}
        )`;
      db.run(sql, function (err) {
        if (err) return reject(`create Tbale ${tableName} failed`);
        resolve("success");
      });
    });
  }

  insertTable(tableName, options) {
    console.log(`insert Table ${tableName}`);
    let sqlKeys = "",
      sqlValues = "";
    for (const key in options) {
      sqlKeys += `${key},`;
      sqlValues += `${options[key]},`;
    }
    sqlKeys = sqlKeys.slice(0, sqlKeys.length - 1);
    sqlValues = sqlValues.slice(0, sqlValues.length - 1);
    const stmt = db.prepare(
      `INSERT INTO ${tableName}(${sqlKeys}) VALUES (${sqlValues})`
    );
    return new Promise((resolve, reject) => {
      stmt.run(function (err) {
        if (err) return reject(`insert Tbale ${tableName} failed`);
        resolve("success");
      });
    });
  }

  deleteTableRows(tableName, options) {
    // 一条数据
    console.log(`delete Table ${tableName} Rows`);
    let sqlParams = "";
    for (const key in options) {
      sqlParams += `${key}=${options[key]}`;
    }
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM ${tableName} WHERE ${sqlParams}`, function (err) {
        if (err) return reject(`delete Tbale ${tableName} rows failed`);
        resolve("success");
      });
    });
  }

  updateTableRows(tableName, options, conditions) {
    // 一条数据
    console.log(`update Table ${tableName} rows`);
    let sqlKeys = "",
      newOptions = {};
    for (const key in options) {
      sqlKeys += `${key}=$${key},`;
      newOptions[`$${key}`] = options[key];
    }
    sqlKeys = sqlKeys.slice(0, sqlKeys.length - 1);
    let sqlConditions = "";
    for (const key in conditions) {
      sqlConditions += `${key}=$${key}`;
      newOptions[`$${key}`] = options[key];
    }
    db.run(
      `UPDATE ${tableName} SET ${sqlKeys} WHERE ${sqlConditions}`,
      newOptions,
      function (err) {
        if (err) return reject(`update Tbale ${tableName} rows failed`);
        resolve("success");
      }
    );
  }

  selectTable(tableName, params, conditions) {
    console.log(`select Table ${tableName}`);
    let sqlParams = params.join(",");
    let sqlConditions = "",
      newOptions = {};
    for (const key in conditions) {
      sqlConditions += `${key}=$${key}`;
      newOptions[`$${key}`] = options[key];
    }
    db.all(
      `SELECT ${sqlConditions} FROM ${tableName} WHERE ${sqlConditions}`,
      newOptions,
      function (err, rows) {
        if (err) return reject(`select Tbale ${tableName} failed`);
        resolve(rows);
      }
    );
  }
}

export default DbClass;
