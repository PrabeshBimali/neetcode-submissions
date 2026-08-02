class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const map = new Map<string, string[]>();

        for(const str of strs) {
            const sorted = [...str].sort().join("");

            if(map.has(sorted)) {
                map.set(sorted, [...map.get(sorted), str]);
            } else {
                map.set(sorted, [str]);
            }
        }

        return [...map.values()];
    }
}
