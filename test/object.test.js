import 'babel-polyfill';
import {
    obj
} from '../lib/index.js';

var o1 = {
    a: {
        aa: {
            aaa: 1
        },
        bb: {
            bbb: 2
        }
    },
    b: 'hello'
}
var o2 = {
    a: {
        aa: {
            aaa: 'first'
        },
        bb: {
            bbb: 2
        }
    },
    c: 'daniel'
}

let om = obj.merge(o1, o2);
let clone = obj.deepClone(o1);
console.log('----------obj test-------------');
console.log('merge', om);
console.log('----------obj clone obj -------------');
console.log('clone', clone);
console.log('----------obj clone Array-------------');
var a = [];
let _a = obj.deepClone(a);
var a1 = [{
    1: 3
}, {
    hello: 'daniel'
}];
let _a1 = obj.deepClone(a1);
console.log('array clone', _a, _a1);
console.log('-----------------------');