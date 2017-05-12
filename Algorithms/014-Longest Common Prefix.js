/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0]
    strs.sort(function(a, b) {
        return a.length - b.length
    })
    const standard = strs[0]
    for(let i = standard.length - 1; i >= 0; i--) {
        let tag = true
        const comparasion = standard.substring(0, i + 1)
        for(let j = 1; j < strs.length; j++) {
            if (strs[j].indexOf(comparasion) !== 0) {
                tag = false
                break;
            }
        }
        if (tag) return comparasion
    }
    return ''
};
