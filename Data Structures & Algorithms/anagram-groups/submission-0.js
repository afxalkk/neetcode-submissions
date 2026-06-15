class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const obj = {};
        const createAnagram = (word) => {
            return word.split("").sort().join("");
        };
        for (let i = 0; i < strs.length; i++) {
            const anagram = createAnagram(strs[i]);
            console.log(createAnagram(strs[i]));
            if (anagram in obj) {
                obj[anagram].push(strs[i])
            } else {
                obj[anagram] = [strs[i]]
            }
        }
        return Object.values(obj)
    }
}
