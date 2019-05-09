'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 方法说明
 *
 * @method 把后面的source数据源合并到数据tar上
 * @param {Object} tar 第一个合并的数据源
 * @param {Object} source 第二个合并的数据源
 * @return {Object} cp 返回一个新的Object对象
 */
var merge = function merge(tar, source) {
    var inMerge = function inMerge(origin, modifys) {
        for (var k in modifys) {
            if (modifys.hasOwnProperty(k)) {
                if (Object.prototype.toString.call(modifys[k]) === '[object Object]') {
                    if (_typeof(origin[k]) !== 'object') {
                        origin[k] = {};
                    }

                    inMerge(origin[k], modifys[k]);
                } else {
                    origin[k] = modifys[k];
                }
            }
        }
    };
    var cp = JSON.parse(JSON.stringify(tar));
    inMerge(cp, source);
    return cp;
};
exports.default = merge;