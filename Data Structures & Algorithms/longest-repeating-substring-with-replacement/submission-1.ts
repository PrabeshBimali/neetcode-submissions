class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    // CDABA
    // 
    characterReplacement(s: string, k: number): number {

        let globalMax = 0;
        let currentMax: number;
        let remainingK: number;

        for(let i = 0; i < s.length; i++) {
            currentMax = 1;
            remainingK = k;
            for(let j = i + 1; j < s.length; j++) {

                if(s[i] === s[j]){
                    currentMax += 1;
                } else if(remainingK > 0) {
                    currentMax += 1;
                    remainingK -= 1;
                } else {
                    break;
                }

                if(j === s.length - 1) {
                    const howLong = s.length - currentMax;

                    if(howLong > 0) {
                        const valueToAdd = howLong >= remainingK ? remainingK : howLong;
                        currentMax += valueToAdd;
                    }
                    
                }

                globalMax = currentMax > globalMax ? currentMax : globalMax;

            }
        }
        
        globalMax = currentMax > globalMax ? currentMax : globalMax;

        return globalMax;
    }
}
