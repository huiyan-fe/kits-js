'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}
// 深度克隆
function deepClone(obj) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== "object" && typeof obj !== 'function') {
        return obj; //原始类型直接返回
    }
    var o = isArray(obj) ? [] : {};
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            o[i] = _typeof(obj[i]) === "object" ? deepClone(obj[i]) : obj[i];
        }
    }
    return o;
}
// const deepClone = (obj) => {
//     var proto = Object.getPrototypeOf(obj);
//     return Object.assign({}, Object.create(proto), obj);

// }
exports.default = deepClone;