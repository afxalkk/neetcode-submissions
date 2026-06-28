class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = new Map()
        obj.set("isDuplicateExist", false);
        for (let i = 0; i < nums.length; i++) {
            const currentNumber = nums[i]
            if (obj.has(currentNumber)) {
                obj.set("isDuplicateExist", true);
                break;
            }
            obj.set(currentNumber, true)

        }
        return obj.get("isDuplicateExist");
    }
}
