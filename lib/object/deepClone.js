"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var deepClone = function deepClone(obj) {
    var proto = Object.getPrototypeOf(obj);
    return Object.assign({}, Object.create(proto), obj);
};
exports.default = deepClone;