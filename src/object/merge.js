
/**
 * 方法说明
 *
 * @method 把后面的source数据源合并到数据tar上
 * @param {Object} tar 第一个合并的数据源
 * @param {Object} source 第二个合并的数据源
 * @return {Object} cp 返回一个新的Object对象
 */
const merge = function (tar, source) {
    const inMerge = (origin, modifys) => {
        for (let k in modifys) {
            if (modifys.hasOwnProperty(k)) {
                if (Object.prototype.toString.call(modifys[k]) === '[object Object]') {
                    if (typeof (origin[k]) !== 'object') {
                        origin[k] = {};
                    }

                    inMerge(origin[k], modifys[k]);
                }
                else {
                    origin[k] = modifys[k];
                }
            }

        }
    };
    let cp = JSON.parse(JSON.stringify(tar));
    inMerge(cp, source);
    return cp;
};
export default merge;