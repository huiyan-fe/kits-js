
/**
 *方法说明
 * @method 找出src2与src1不同的部分      
 * @param {Object} src1 比较的基本对象
 * @param {Object} src2 被比较的对象
 * @return {Object} diffObj 返回一个新的Object对象diffObj
 *         src1有，src2没有的部分 diffObj[k]=undefined;
 *         src1没有，src2有的部分 diffObj[k]=src2[k];
 */
const diff = function (src1, src2) {
    let diffObj = {};
    const _diff = (base, src, df) => {
        let ko = {};
        base && Object.keys(base).map(k => {
            ko[k] = true;
        })
        src && Object.keys(src).map(k => {
            ko[k] = true;
        })

        for (var k in ko) {
            if (base[k] &&
                Object.prototype.toString.call(base[k]) == '[object Object]' &&
                src[k] &&
                Object.prototype.toString.call(src[k]) == '[object Object]'
            ) {
                if (
                    JSON.stringify(base[k]) !== JSON.stringify(src[k])
                ) {
                    if (!df[k]) {
                        df[k] = {};
                    }
                    let _df = df[k];
                    _diff(base[k], src[k], _df)
                } else {
                    df[k] = src[k];
                }
            } else {
                df[k] = src[k];
            }
        }
    }
    _diff(src1, src2, diffObj)
    if (Object.keys(diffObj).length == 0) {
        diffObj = null;
    }
    return (diffObj);
}

export default diff;