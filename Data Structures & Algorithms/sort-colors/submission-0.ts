class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let counts = [0, 0, 0];

        for(let num of nums) {
            counts[num] += 1;
        }

        let index = 0;
        for (let i = 0; i < counts.length; i++) {
            for(let j = 0; j < counts[i]; j++) {
                nums[index] = i;
                index++;
            }
        }
    }
}
