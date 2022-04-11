"use strict";
import NodeCache from "node-cache"
const cache = new NodeCache();

/**
 * 
 * @param {Number} 字符串长度 default 8
 * @returns  'c5hswpn36ui'
 */
function randomString(length = 8) {
    return Math.random().toString(36).slice(2, length + 2);
};

/**
 * 
 * @param {Number} 字符串长度 default 5
 * @param {Number} 组合字符串长度 default 5
 * @returns 'gug9y-b35zn-vcbso-l5y6r-gylck' 
 */
function guid(length = 5, combination = 5) {
    let str = '';
    for (let i = 0; i < combination; i++) {
        str += `${randomString(length)}-`;
    }
    return str.slice(0, str.length - 1);
};

/**
 * 加载器函数
 * @param {String} filepath 绝对路径
 *
 */
function loadFile(filepath) {
    try {
        // require js module
        const obj = require(filepath)
        if (!obj) return obj
        // it's es module
        if (obj.__esModule) return 'default' in obj ? obj.default : obj
        return obj
    } catch (err) {
        err.message = `[util] load file: ${filepath}, error: ${err.message}`
        throw err
    }
}

export {
    loadFile,
    cache,
    guid,
    randomString
}