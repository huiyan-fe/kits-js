/**
 * src support multi data types
 * 1. multi points array seperated by |
 *  "114.33,40.22,114.33,40.22,114.33,40.22|114.33,40.22,114.33,40.22,114.33,40.22"
 * 2. just like: 'lng,lat,lnt,lat,lnt,lat,lnt,lat'
 *  "114.33,40.22,114.33,40.22,114.33,40.22"
 */
import createPoint from './createPoint.js';
const getPoints = function (src) {
    let polygons = [];
    let borders = userInfo.border ? userInfo.border.split('|') : [];

    borders.forEach((border) => {
        let arr = border ? border.split(',') : [];
        let objArr = [];

        let i = 0;
        while (i < arr.length - 1) {
            let obj = {
                lng: parseFloat(arr[i]),
                lat: parseFloat(arr[i + 1])
            };
            objArr.push(obj);
            i += 2;
        }
        polygons.push(objArr);
    });

    return polygons;
}
export default getPoints;