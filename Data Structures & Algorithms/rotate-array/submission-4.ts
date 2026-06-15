class Solution {


    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    //let
    rotate(nums: number[], k: number): void {
        const copyNums = new Array<number>(nums.length);
        const newK = k % nums.length;

        for(let i = 0; i < nums.length; i++) {
            if(i === newK) {
                copyNums[i] = nums[0];
            } else if(i > newK) {
                copyNums[i] = nums[i-newK];
            } else if(i < newK) {
                copyNums[i] = nums[nums.length - (newK - i)];
            }
        }

        for(let i = 0; i < nums.length; i++) {
            nums[i] = copyNums[i];
        }

    }
}
