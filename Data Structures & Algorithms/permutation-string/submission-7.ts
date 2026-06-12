class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        if(s2.length < s1.length) return false;
        
        const mapS1 = new Map<string, number>();
        const mapS2 = new Map<string, number>();

        const allKeys = new Array<string>();

        for (let i = 97; i <= 122; i++) {
            mapS1.set(String.fromCharCode(i), 0);
            mapS2.set(String.fromCharCode(i), 0);
            allKeys.push(String.fromCharCode(i));
        }

        for(let i = 0; i < s1.length; i++) {
            mapS1.set(s1[i], mapS1.get(s1[i]) + 1);
            mapS2.set(s2[i], mapS2.get(s2[i]) + 1);
        }

        function checkMatch() {
            for(const k of allKeys) {
                if(mapS1.get(k) !== mapS2.get(k)) return false;
            }

            return true;
        }

        if(checkMatch()) return true;

        for(let i = s1.length; i < s2.length; i++) {
            mapS2.set(s2[i], mapS2.get(s2[i]) + 1);
            mapS2.set(s2[i-s1.length], mapS2.get(s2[i-s1.length]) - 1);

            if(checkMatch()) return true;
        }

        return false;
    }
}
