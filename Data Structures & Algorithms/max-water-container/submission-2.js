class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0;
        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const minimum = Math.min(heights[i], heights[j]) * (j-i)
     
                area = Math.max(minimum, area)
            }
        }

        return area
    }
}
