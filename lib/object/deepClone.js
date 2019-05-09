'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 方法说明
 *
 * @method 判断是否为Object对象
 * @param {Object} obj 被判断的数据
 * @return {boolean} 返回值
 */
var isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

/**
 *  方法说明
 *
 * @method 深度克隆
 * @param {Object} obj 需要克隆的原始对象
 * @return {Object} 返回传入数据的拷贝
 */
var deepClone = function deepClone(obj) {
    var cloneObj = void 0;
    var Constructor = obj.constructor;
    var hash = new WeakMap();
    switch (Constructor) {
        case RegExp:
            {
                cloneObj = new Constructor(obj);
                break;
            }
        case Date:
            {
                cloneObj = new Constructor(obj.getTime());
                break;
            }
        default:
            {
                if (hash.has(obj)) {
                    return hash.get(obj);
                }

                cloneObj = new Constructor();
                hash.set(obj, cloneObj);
            }
    }
    for (var key in obj) {
        cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key], hash) : obj[key];
    }
    return cloneObj;
};

// const deepClone = (obj) => {
//     var proto = Object.getPrototypeOf(obj);
//     return Object.assign({}, Object.create(proto), obj);

// }
exports.default = deepClone;