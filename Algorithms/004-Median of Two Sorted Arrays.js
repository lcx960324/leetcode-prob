/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2];
    nums.sort(function(a, b) {
        return a - b;
    })
    if ((nums.length - 1) % 2 === 0) return nums[((nums.length - 1) / 2)] / 1.0;
    else return (nums[(nums.length / 2)] + nums[((nums.length - 2) / 2)]) / 2.0;
};