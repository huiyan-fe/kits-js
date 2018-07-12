import 'babel-polyfill';
import {
    Obj
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

let om = Obj.mrege(o1, o2);
let clone = Obj.deepClone(o1);
console.log('merge', om);
console.log('clone', clone);