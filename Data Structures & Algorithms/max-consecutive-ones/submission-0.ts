class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let currentMax = 0;
        let overallMax = 0;

        for(const bit of nums) {
            if(bit === 1) {
                currentMax+=1;
            } else {
                if(currentMax > overallMax) {
                    overallMax = currentMax;
                }
                currentMax = 0;
            }
        }

        if(currentMax > overallMax) {
            overallMax = currentMax;
        }

        return overallMax;
    }
}
