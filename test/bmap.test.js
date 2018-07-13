import 'babel-polyfill';
import {
    bmap
} from '../lib/index.js';

var sps = '114.33,40.22,114.33,40.22,114.33,40.22|114.33,40.22,114.33,40.22,114.33,40.22';
var sp = '114.33,40.22';
let ps = bmap.getPoints(sps, true);
let p = bmap.createPoint(sp, true);
console.log('-------bmap test-------');
console.log('getPoints', ps);
console.log('createPoint', p);
console.log('-----------------------');