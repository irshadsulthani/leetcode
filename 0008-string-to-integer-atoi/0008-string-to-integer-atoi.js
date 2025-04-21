/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim(); 
    let num = parseInt(s);
    if (isNaN(num)) return 0; 
    
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    
    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;
    
    return num;
};