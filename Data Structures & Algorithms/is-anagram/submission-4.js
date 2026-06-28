class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const array = new Array(26).fill(0);
        if (s.length !== t.length) {
            return false;
        }
        for (let i = 0; i < s.length; i++) {
            array[s.charCodeAt(i) - 97]++;
            array[t.charCodeAt(i) - 97]--;
        }
        let output = true
        for (let i = 0; i < array.length; i++) {
            if (array[i]) {
                output = false
            }
        }
        return output
    }
}
