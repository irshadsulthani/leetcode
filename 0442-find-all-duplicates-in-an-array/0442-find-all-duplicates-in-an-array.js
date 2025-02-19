/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
   let seen = new Set()
   let dupe = new Set()

   nums.filter((num)=> {
    if(seen.has(num)){
        seen.add(num)
        dupe.add(num)
    }else{
        seen.add(num)
    }
   })
   return [...dupe]
};