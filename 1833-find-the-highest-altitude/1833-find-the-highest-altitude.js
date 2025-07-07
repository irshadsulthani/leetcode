/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let largest = 0
    let sum = 0

    for(let i = 0; i < gain.length; i++){
        sum += gain[i]
        largest = Math.max(sum, largest)
    }
    return largest
};