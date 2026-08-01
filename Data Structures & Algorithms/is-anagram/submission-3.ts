class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        const charToCount1 = new Map<string, number>();
        const charToCount2 = new Map<string, number>();

        for(let i = 0; i < s.length; i++) {
            if(charToCount1.has(s[i])) {
                charToCount1.set(s[i], charToCount1.get(s[i]) + 1);
            } else {
                charToCount1.set(s[i], 1);
            }

            if(charToCount2.has(t[i])) {
                charToCount2.set(t[i], charToCount2.get(t[i]) + 1);
            } else {
                charToCount2.set(t[i], 1);
            }

        }

        for(const c of s) {
            if(charToCount1.get(c) !== charToCount2.get(c)) return false;
        }

        return true;

    }
}
