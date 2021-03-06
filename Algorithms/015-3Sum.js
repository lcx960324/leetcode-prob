/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = []
    nums.sort(function (a, b) {
        return a - b
    })
    if (nums[nums.length - 1] < 0) return result
    for(let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const target = -nums[i]
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            if (nums[left] + nums[right] === target) {
                result.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while(left < right && nums[left] === nums[left - 1]) left++
                while(left < right && nums[right] === nums[right + 1]) right--
            } else {
                if(nums[left] + nums[right] < target) left++
                else right--
            }
        }
    }
    return result
};