const merge = function (tar, source) {
    const combine = (origin, modifys) => {
        for (var k in modifys) {
            if (typeof (modifys[k]) == 'object') {
                combine(origin[k], modifys[k])
            } else {
                origin[k] = modifys[k];
            }
        }
    }
    let cp = JSON.parse(JSON.stringify(tar));
    combine(cp, source)
    return cp;
}
export default merge;