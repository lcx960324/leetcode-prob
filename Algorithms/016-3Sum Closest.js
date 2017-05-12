/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums === null || nums.length < 3) return 0
    nums.sort(function(a, b) {
        return a - b
    })
    let result = nums[0] + nums[1] + nums[2]
    let distance = Math.abs(result - target)
    for(let i = 0; i < nums.length - 2; i++) {
        if (distance === 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1
        while(left < right) {
            const tmp = nums[i] + nums[left] + nums[right]
            if (Math.abs(tmp - target) < distance) {
                console.log(tmp)
                result = tmp
                distance = Math.abs(result - target)
            }
            if (tmp < target) {
                left++
                while(left < right && nums[left] === nums[left - 1]) left++
            }
            else if (result === target) break;
            else {
                right--
                while(left < right && nums[right] === nums[right + 1]) right--
            }
        }
    }
    return result
};