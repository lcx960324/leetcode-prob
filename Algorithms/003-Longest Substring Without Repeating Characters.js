/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var substr = '';
    var length = s.length === 0 ? 0 : 1;
    for(var i = 0; i < s.length; i++) {
        var index = substr.indexOf(s[i])
        if (index === -1) {
            substr += s[i];
            if (length < substr.length) length = substr.length;
        } else {
            while((index = substr.indexOf(s[i])) !== -1) {
                substr = substr.slice(index + 1);
            }
            substr += s[i]
        }
    }
    return length;
};