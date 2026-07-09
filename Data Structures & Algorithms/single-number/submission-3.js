class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const obj = {};
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] in obj) {
                obj[nums[i]] = obj[nums[i]] + 1;
            } else {
                obj[nums[i]] = 1;
            }
        }
        for (const property in obj) {
            console.log(property);
            if(obj[property] === 1){
                return property
            }
        }
        // return unique;
    }
}
