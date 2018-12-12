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
    o: {
        aa: {
            aaa: 'first'
        },
        bb: {
            bbb: 2
        }
    },
    s: 'daniel',
    nu: null,
    un: undefined,
    ks: '',
    array: [{
        1: 3
    }, {
        hello: 'daniel'
    }]
}

let om = obj.merge(o1, o2);
let clone = obj.deepClone(o2);
console.log('----------obj test-------------');
console.log('merge', om);
console.log('----------obj clone obj -------------');
console.log('clone', clone);
console.log('----------obj clone Array-------------');

console.log('-----------------------');