class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        if(s2.length < s1.length) return false;

        let map = new Map<string, number>();

        for (const c of s1) {
            if(map.has(c)) {
                const newVal = map.get(c) + 1;
                map.set(c, newVal);
                continue;
            }

            map.set(c, 1);
        }
        console.log("MAP", map);

        for(let i = 0; i < s2.length; i++) {
            if(s2.length - i < s1.length) return false;
            
            let length = 1;
            let index = i;

            while(map.has(s2[index]) && length <= s1.length){
                const newVal = map.get(s2[index]) - 1;
                if(newVal === 0) {
                    map.delete(s2[index]);
                } else {
                    map.set(s2[index], newVal);
                }
                if(map.size === 0) return true;
                index++;
                length++;
            }


            map = new Map<string, number>();
            for (const c of s1) {
                if(map.has(c)) {
                    const newVal = map.get(c) + 1;
                    map.set(c, newVal);
                    continue;
                }

                map.set(c, 1);
            }
        }

        return false;
    }
}
