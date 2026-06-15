class Solution {

    private rotateOneTime(nums: number[]) {
        let lastElement = nums[nums.length - 1]
        for (let i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i-1]
        }

        nums[0] = lastElement; 
    }
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        for(let i = 1; i <= k; i++) {
            this.rotateOneTime(nums);
        }
    }
}
