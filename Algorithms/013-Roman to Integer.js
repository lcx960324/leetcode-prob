/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0
    const level = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let end = false
    for (i = 0; i < s.length - 1; i++) {
        if (level[s[i]] < level[s[i+1]]) {
            result += level[s[i+1]] - level[s[i]]
            i++
            if (i === s.length - 1) end = true
        }
        else result += level[s[i]]
    }
    if (!end) result += level[s[s.length - 1]]
    return result
};