class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {}
        let result = false
        for(let i=0;i<nums.length;i++){
            if(obj[nums[i]]){
                result=true
                break
            }
            obj[nums[i]]=true
        }
        return result
    }
}
