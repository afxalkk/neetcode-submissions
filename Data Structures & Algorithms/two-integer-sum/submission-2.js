class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = []
        for(let i=0;i<nums.length;i++){
            if(nums.indexOf(target-nums[i])>-1){
                result = [i, nums.indexOf(target-nums[i])]
            }
        }
        return result
    }
}
