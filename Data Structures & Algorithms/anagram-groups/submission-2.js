class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const map = new Map()
        const createAnagram = (word) => {
            return word.split("").sort().join("");
        };
        for (let i = 0; i < strs.length; i++) {
            const anagram = createAnagram(strs[i]);
            console.log(createAnagram(strs[i]));
            if (map.has(anagram)) {
                map.get(anagram).push(strs[i])
            } else {
                map.set(anagram,[strs[i]] )
            }
        }
        return [...map.values()]
    }
}
