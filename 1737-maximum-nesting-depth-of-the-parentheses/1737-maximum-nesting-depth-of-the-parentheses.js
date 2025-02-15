/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let currentDep = 0
    let maxDep = 0
    for(let char of s){
        if(char === '('){
            currentDep++
            maxDep = Math.max(maxDep, currentDep)
        }else if(char === ')'){
            currentDep--
        }
    }
    return maxDep
};