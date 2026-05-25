class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        const sCharFrequency = new Map<string, number>();
        const tCharFrequency = new Map<string, number>();

        for(let i = 0; i < s.length; i++) {
            const charS = s[i];
            const charT = t[i];

            const currentCountS = sCharFrequency.get(charS) || 0;
            const currentCountT = tCharFrequency.get(charT) || 0;

            sCharFrequency.set(charS, currentCountS + 1);
            tCharFrequency.set(charT, currentCountT + 1);
        }

        for(const [key, value] of sCharFrequency) {
            if(tCharFrequency.get(key) !== value) return false;
        }

        return true;
    }
}
