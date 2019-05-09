'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 方法说明
 *
 * @method 找出src2与src1不同的部分
 * @param {Object} src1 比较的基本对象
 * @param {Object} src2 被比较的对象
 * @return {Object} diffObj 返回一个新的Object对象diffObj
 *         src1有，src2没有的部分 diffObj[k]=undefined;
 *         src1没有，src2有的部分 diffObj[k]=src2[k];
 */
var diff = function diff(src1, src2) {
    var diffObj = {};
    var inDiff = function inDiff(base, src, df) {
        var ko = {};
        base && Object.keys(base).map(function (k) {
            ko[k] = true;
        });
        src && Object.keys(src).map(function (k) {
            ko[k] = true;
        });

        for (var k in ko) {
            if (ko.hasOwnProperty(k)) {
                if (base[k] && Object.prototype.toString.call(base[k]) === '[object Object]' && src[k] && Object.prototype.toString.call(src[k]) === '[object Object]') {
                    if (JSON.stringify(base[k]) !== JSON.stringify(src[k])) {
                        if (!df[k]) {
                            df[k] = {};
                        }

                        var df2 = df[k];
                        inDiff(base[k], src[k], df2);
                    } else {
                        df[k] = src[k];
                    }
                } else {
                    df[k] = src[k];
                }
            }
        }
    };
    inDiff(src1, src2, diffObj);
    if (Object.keys(diffObj).length === 0) {
        diffObj = null;
    }

    return diffObj;
};

exports.default = diff;