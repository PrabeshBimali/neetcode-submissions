class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let prefix = strs[0];

        for(let i = 0; i < strs.length; i++) {
            for(let j = 0; j < prefix.length; j++) {
                if(prefix[j] !== strs[i][j]) {
                    prefix = prefix.slice(0, j);
                }   
            }
        }
        
        return prefix;
    }
}
