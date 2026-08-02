class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const map = new Map<string, string[]>();

        for(const str of strs) {
            const arr = new Array(26).fill(0);

            for(const c of str) {
                const index = c.charCodeAt(0) - "a".charCodeAt(0);
                arr[index] = arr[index] + 1;
            }

            const key = arr.join();
            
            if(map.has(key)) {
                map.set(key, [...map.get(key), str]);
            } else {
                map.set(key, [str]);
            }
        }

        return [...map.values()];
    }
}
