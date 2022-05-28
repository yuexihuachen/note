"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _sqlite = _interopRequireDefault(require("sqlite3"));

var db;

var DbClass = /*#__PURE__*/function () {
  function DbClass() {
    (0, _classCallCheck2["default"])(this, DbClass);
    this.createDb();
  }

  (0, _createClass2["default"])(DbClass, [{
    key: "createDb",
    value: function createDb() {
      var DBname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'note';
      return new Promise(function (resolve, reject) {
        if (!db) {
          var sqlite3 = _sqlite["default"].verbose();

          db = new sqlite3.Database("server/DB/".concat(DBname, ".sqlite3"));
        }

        if (!db) return reject('create db error');
        resolve(db);
      });
    }
  }, {
    key: "createTable",
    value: function createTable(tableName, options) {
      var sqlParams = '';

      for (var key in options) {
        sqlParams += "".concat(key, " ").concat(options[key], ",");
      }

      sqlParams = sqlParams.slice(0, sqlParams.length - 1);
      return new Promise(function (resolve, reject) {
        var sql = "CREATE TABLE IF NOT EXISTS ".concat(tableName, " (\n        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, \n        ").concat(sqlParams, "\n        )");
        db.run(sql, function (err) {
          if (err) return reject("create Tbale ".concat(tableName, " failed"));
          resolve('success');
        });
      });
    }
  }, {
    key: "insertTable",
    value: function insertTable(tableName, options) {
      var sqlKeys = '',
          sqlValues = '';

      for (var key in options) {
        sqlKeys += "".concat(key, ",");
        sqlValues += "\"".concat(options[key], "\",");
      }

      sqlKeys = sqlKeys.slice(0, sqlKeys.length - 1);
      sqlValues = sqlValues.slice(0, sqlValues.length - 1);
      var stmt = db.prepare("INSERT INTO ".concat(tableName, "(").concat(sqlKeys, ") VALUES (").concat(sqlValues, ")"));
      return new Promise(function (resolve, reject) {
        stmt.run(function (err) {
          if (err) return reject("insert Tbale ".concat(tableName, " failed"));
          resolve({
            data: 'add success',
            message: 'success'
          });
        });
      });
    }
  }, {
    key: "deleteTableRows",
    value: function deleteTableRows(tableName, options) {
      // 一条数据
      var sqlParams = '';

      for (var key in options) {
        sqlParams += "".concat(key, "=").concat(options[key]);
      }

      return new Promise(function (resolve, reject) {
        db.run("DELETE FROM ".concat(tableName, " WHERE ").concat(sqlParams), function (err, rows) {
          if (err) return reject("delete Tbale ".concat(tableName, " rows failed"));
          resolve({
            message: 'success',
            data: rows
          });
        });
      });
    }
  }, {
    key: "updateTableRows",
    value: function updateTableRows(tableName, options, conditions) {
      // 一条数据
      var sqlKeys = '',
          newOptions = {};

      for (var key in options) {
        sqlKeys += "".concat(key, "=$").concat(key, ",");
        newOptions["$".concat(key)] = options[key];
      }

      sqlKeys = sqlKeys.slice(0, sqlKeys.length - 1);
      var sqlConditions = '';

      for (var _key in conditions) {
        sqlConditions += "".concat(_key, "=$").concat(_key, " ");
        newOptions["$".concat(_key)] = conditions[_key];
      }

      return new Promise(function (resolve, reject) {
        db.run("UPDATE ".concat(tableName, " SET ").concat(sqlKeys, " WHERE ").concat(sqlConditions), newOptions, function (err, rows) {
          if (err) return reject("update Tbale ".concat(tableName, " rows failed"));
          resolve({
            message: 'success',
            data: rows
          });
        });
      });
    }
  }, {
    key: "selectTable",
    value: function selectTable(tableName, params, conditions) {
      var extendSql = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      // 查询的参数名称
      var sqlParams = params.join(','); // 查询的条件

      var sqlConditions = '',
          newOptions = {};

      for (var key in conditions) {
        sqlConditions += "".concat(key, "=$").concat(key, " AND ");
        newOptions["$".concat(key)] = conditions[key];
      }

      if (sqlConditions.length) {
        sqlConditions = " WHERE ".concat(sqlConditions.slice(0, sqlConditions.length - 4));
      }

      if (!sqlConditions.length && extendSql.length) {
        extendSql = " WHERE ".concat(extendSql);
      } else if (sqlConditions.length && extendSql.length) {
        extendSql = " AND ".concat(extendSql);
      } // extendSql 扩展条件


      return new Promise(function (resolve, reject) {
        db.all("SELECT ".concat(sqlParams, " FROM ").concat(tableName, " ").concat(sqlConditions, " ").concat(extendSql), newOptions, function (err, rows) {
          if (err) return reject("select Tbale ".concat(tableName, " failed"));
          resolve({
            message: 'success',
            data: rows
          });
        });
      });
    }
  }]);
  return DbClass;
}();

exports["default"] = DbClass;