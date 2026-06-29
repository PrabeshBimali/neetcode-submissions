class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        nums.sort((a, b) => a - b);
        let index = nums.length - k;
        return nums[index]
    }
}
