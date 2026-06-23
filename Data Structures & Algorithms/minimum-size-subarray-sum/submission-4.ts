class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let total = 0, left = 0, minLength = Infinity;
        for(let right = 0; right < nums.length; right++) {
            total += nums[right];
            while (total >= target) {
                minLength = Math.min(minLength, right - left + 1);
                total -= nums[left];
                left++;
            }
        }

        return minLength === Infinity ? 0 : minLength;    
    }
}
