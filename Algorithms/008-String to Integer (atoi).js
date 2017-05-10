/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let s = str.trim();
    // for(let i = 0; i < str.length; i++) {
    //     if (str[i] !== ' ') s += str[i];
    // }
    let filteredStr = '0';
    for(let i = 0; i < s.length; i++) {
        if(i === 0 && (s[i] === '-' || s[i] === '+')) filteredStr = s[i] + filteredStr;
        else {
            if (!Number.isNaN(+s[i]) && s[i] !== ' ') filteredStr += s[i];
            else break;
        }
    }
    const result = +filteredStr;
    if (result > 2147483647) return 2147483647;
    if (result < -2147483648) return -2147483648;
    return result;
};