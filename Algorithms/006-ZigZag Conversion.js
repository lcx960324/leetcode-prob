/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const arr = new Array(numRows);
    let reverse = false;
    for(let i = 0, j = 0, k = 0; k < s.length; k++) {
        if(arr[i] === undefined) arr[i] = '';
        arr[i] += s[k];
        if(i === numRows - 1) {
            reverse = true;
        } else if (i === 0) {
            reverse = false;
        }
        !reverse ? i++ : i--;
        i < 0 ? i = 0 : i ;
    }
    let result = '';
    for(let i = 0; i < numRows; i++) {
        result += arr[i] === undefined ? '' : arr[i];
    }
    return result;
};