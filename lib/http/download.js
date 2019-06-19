'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable */
/**
 * @file http
 */
/* globals XMLHttpRequest window location document*/

function postDownload(options) {
    var form = document.createElement('form');
    form.action = options['url'];
    form.method = options['method'] || 'post';
    form.target = options['target'] || 'blank';
    var params = options['data'];
    params && params instanceof Object && Object.keys(params).map(function (k) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = k;
        input.value = params[k];
        form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}
/**
 * @params.method
 * @params.data
 * @params.url
 * @params.fail
 * @params.success
 */
function getDownload(url, fileName) {
    var a = document.createElement('a');
    a.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([url]);
    a.href = URL.createObjectURL(blob);
    a.href = url;
    if (fileName) {
        a.download = fileName;
    }
    document.body.appendChild(a);
    // 触发点击
    a.click();
    // 然后移除
    document.body.removeChild(a);
    // var iframe  = document.createElement("iframe");
    // document.body.appendChild(iframe); 		
    // iframe.src = url;
    // iframe.style.display = "none";
}

function download(options, fileName) {
    if (options && options instanceof Object && options.hasOwnProperty('url')) {
        postDownload(options);
    } else {
        getDownload.apply(this, arguments);
    }
}

exports.default = download;