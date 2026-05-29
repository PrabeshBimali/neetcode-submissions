class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const extendedNums = new Array<number>();

        for(let i = 0; i < nums.length; i++) {
            extendedNums[i] = nums[i];
            extendedNums[nums.length + i] = nums[i];
        }

        return extendedNums;
    }
}
