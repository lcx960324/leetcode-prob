/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = '';
    if (x < 0) {
        for (let i of -x + '') {
            str = i + str;
        }
        str = '-' + str;
    } else {
        for (let i of x + '') {
            str = i + str;
        }
    }
    const result = +str;
    if(result > 2147483647 || result < -2147483648) {
        return 0;
    } else {
        return result;
    }
};