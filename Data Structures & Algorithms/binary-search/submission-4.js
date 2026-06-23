class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let index = 0;
        let result = -1
        while (index <= nums.length - 1) {
            if(nums[index] === target){
                result = index
                break
            }else{
                index++;
            }
        }
        return result;
    }
}
