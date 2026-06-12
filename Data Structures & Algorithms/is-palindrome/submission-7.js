class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const formattedText = s.replace(/[/'$,?:. ]/g,'').toLowerCase()
        let output = ``
        for(let i=0;i<formattedText.length;i++){
            output = `${formattedText[i]}${output}`
        }
        return output === formattedText
    }
}
