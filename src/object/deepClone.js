/**
 * 方法说明
 *
 * @method 判断是否为Object对象
 * @param {Object} obj 被判断的数据
 * @return {boolean} 返回值
 */
const isObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

/**
 *  方法说明
 *
 * @method 深度克隆
 * @param {Object} obj 需要克隆的原始对象
 * @return {Object} 返回传入数据的拷贝
 */
const deepClone = function (obj) {
    let cloneObj;
    let Constructor = obj.constructor;
    let hash = new WeakMap();
    switch (Constructor) {
        case RegExp: {
            cloneObj = new Constructor(obj);
            break;
        }
        case Date: {
            cloneObj = new Constructor(obj.getTime());
            break;
        }
        default: {
            if (hash.has(obj)) {
                return hash.get(obj);
            }

            cloneObj = new Constructor();
            hash.set(obj, cloneObj);
        }
    }
    for (let key in obj) {
        cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key], hash) : obj[key];
    }
    return cloneObj;
};


// const deepClone = (obj) => {
//     var proto = Object.getPrototypeOf(obj);
//     return Object.assign({}, Object.create(proto), obj);

// }
export default deepClone;