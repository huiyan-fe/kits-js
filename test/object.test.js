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

let om = obj.mrege(o1, o2);
let clone = obj.deepClone(o1);
console.log('----------obj test-------------');
console.log('merge', om);
console.log('clone', clone);
console.log('-----------------------');