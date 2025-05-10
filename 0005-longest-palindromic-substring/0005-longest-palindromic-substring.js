/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = "";

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i);       
        let even = expand(i, i + 1);  

        if (odd.length > res.length) res = odd;
        if (even.length > res.length) res = even;
    }

    return res;
};
