'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _deepClone = require('./deepClone.js');

var _deepClone2 = _interopRequireDefault(_deepClone);

var _merge = require('./merge.js');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extend = {
    deepClone: _deepClone2.default,
    mrege: _merge2.default
};
exports.default = extend;