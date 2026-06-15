class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length - 1;

        while (start < end) {
            const currentSum = numbers[start] + numbers[end];
            if (currentSum === target) {
                return [start + 1, end + 1];
            }
            if (currentSum < target) {
                start++;
            } else {
                end--;
            }
        }
    }
}
