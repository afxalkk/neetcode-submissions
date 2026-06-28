class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let isDuplicateExist = false;
        const obj = new Map()
        for (let i = 0; i < nums.length; i++) {
            const currentNumber = nums[i]
            if (obj.has(currentNumber)) {
                isDuplicateExist = true;
                break;
            }else{
                obj.set(currentNumber, true)
            }
        }
        return isDuplicateExist;
    }
}
