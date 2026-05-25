class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap = new Map<string, string[]>();

        for(const str of strs) {
            const count = Array(26).fill(0);

            for(const s of str) {
                const index = s.charCodeAt(0) - "a".charCodeAt(0);
                count[index] += 1;
            }

            const key = count.join(",")

            if(!anagramMap.has(key)) {
                anagramMap.set(key, []);
            }

            anagramMap.get(key).push(str);
        }

        return Array.from(anagramMap.values());
    }
}
