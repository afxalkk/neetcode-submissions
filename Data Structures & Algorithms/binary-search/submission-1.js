class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let found = false;
        let index = 0;
        let result = -1
        while (index <= nums.length - 1 && !found) {
            if(nums[index] === target){
                found = true
                result = index
                break
            }else{
                index++;
            }
        }
        return result;
    }
}
