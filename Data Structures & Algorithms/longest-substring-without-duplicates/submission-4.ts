class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let map = new Map<string, number>();
        let globalMax = 0;
        let counter = 0;

        for(let i = 0; i < s.length; i++) {
            map.clear()
            map.set(s[i], 1);
            counter = 1;
            for(let j = i + 1; j < s.length; j++) {
                if(map.get(s[j]) === 1) {
                    break;
                }
                map.set(s[j], 1);
                counter++;
                if(counter > globalMax) globalMax = counter;
            }
        }

        if(counter > globalMax) globalMax = counter;


        return globalMax;
    }
}
