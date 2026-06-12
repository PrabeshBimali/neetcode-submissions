class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let min = nums[0];

        for(const n of nums) {
            if(n < min) min = n;
        }

        return min;
    }
}
