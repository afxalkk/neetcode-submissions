class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    replaceElements(arr) {
        let left = 0;
        const findLargest = (start) => {
            let largest = arr[start];
            for (let i = start + 1; i < arr.length; i++) {
                if (arr[i] > largest) {
                    largest = arr[i];
                }
            }
            return largest;
        };
        while (left !== arr.length - 1) {
            arr[left] = findLargest(left + 1);
            left++;
        }
        arr[arr.length - 1] = -1;
        return arr;
    }
}
