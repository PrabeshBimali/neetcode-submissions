class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let minLength = Math.min(word1.length, word2.length);
        let merged = "";
        for(let i = 0; i < minLength; i++) {
            merged = merged + word1[i] + word2[i];
            console.log(merged)
        }

        merged = merged + word1.slice(minLength) + word2.slice(minLength);
        return merged;
    }
}
