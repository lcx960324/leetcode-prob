/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const length = s.length;
    if (length === 0 || length === 1) return s;
    let answer = s[0];
    for (let i = 0; i < length - 1; i++) {
        for (let j = length - 1; j > i; j--) {
            if (j - i + 1 < answer.length) break;
            for (let a = i, b = j; a <= b; a++, b--) {
                if (s[a] !== s[b]) {
                    break;
                }
                if (a + 1 === b || a === b) {
                    let res = s.substring(i, j + 1);
                    if (res.length > answer.length) answer = res;
                }
            }
        }
    }
    return answer;
};