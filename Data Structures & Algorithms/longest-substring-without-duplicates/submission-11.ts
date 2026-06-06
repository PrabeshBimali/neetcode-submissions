class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        if(s === "" ) return 0;

        let map = new Map<string, number>();
        let left = 0;
        let globalMax = 1;
        let currentMax = 0;

        for(let i = 0; i < s.length; i++) {
            if(map.get(s[i]) >= left) {
                currentMax = 0;
                left = map.get(s[i]) + 1;
            } else {
                currentMax = i - left + 1;
            }
            
            map.set(s[i], i);
            
            if(currentMax > globalMax) globalMax = currentMax;

        }

        if(currentMax > globalMax) globalMax = currentMax;

        return globalMax;
    }
}
