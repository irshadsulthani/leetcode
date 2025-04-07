/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = []

    while(n !== 1){
        if(seen.includes(n)) return false
        seen.push(n)

        n= n.toString()
            .split('')
            .reduce((acc,val) => acc + val * val ,0 )
    }
    return true
};







