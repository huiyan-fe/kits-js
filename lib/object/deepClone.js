'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clone = function clone(tar, source) {
    var combine = function combine(origin, modifys) {
        for (var k in modifys) {
            if (_typeof(modifys[k]) == 'object') {
                combine(origin[k], modifys[k]);
            } else {
                origin[k] = modifys[k];
            }
        }
    };
    var cp = JSON.parse(JSON.stringify(tar));
    combine(cp, source);
    return cp;
};
exports.default = clone;