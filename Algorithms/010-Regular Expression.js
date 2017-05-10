/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const regexp = new RegExp(p);
    const result = s.match(regexp);
    return result !== null && result[0] === s;
};