/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let a = nums1.filter(x => nums2.includes(x))
    let b = nums1.filter(x => nums3.includes(x))
    let c = nums2.filter(x => nums3.includes(x))

    return Array.from(new Set([...a,...b,...c]))
};