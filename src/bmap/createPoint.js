/**
 * 
 * @param {*} pt 
 * pt demo1: '114.54,40.33'
 * pt demo2: [114.54,40.33]
 * pt demo3: {lng:114.54,lat:40.33}
 */
const createBmapPoint = (pt) => {
    let lng;
    let lat;
    if (typeof pt === 'string') {
        const lnglatstrArr = pt.split(',');
        lng = JSON.parse(lnglatstrArr[0].match(/[0-9]+\.?[0-9]{0,}/)[0]);
        lat = JSON.parse(lnglatstrArr[1].match(/[0-9]+\.?[0-9]{0,}/)[0]);
    } else if (pt instanceof Array) {
        lng = JSON.parse(pt[0]);
        lat = JSON.parse(pt[1]);
    } else if (pt instanceof Object) {
        lng = pt.lng;
        lat = pt.lat;
    }
    let ptArr = [lng, lat]
    let mpoint = new BMap.Point(ptArr[0], ptArr[1])
    return mpoint
}
export default createBmapPoint;