class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let isDuplicateExist = false;
        console.log(nums);
        for (let i = 0; i < nums.length; i++) {
            if (i !== nums.lastIndexOf(nums[i]) && !isDuplicateExist) {
                isDuplicateExist = true;
                break;
            }
        }
        return isDuplicateExist;
    }
}
