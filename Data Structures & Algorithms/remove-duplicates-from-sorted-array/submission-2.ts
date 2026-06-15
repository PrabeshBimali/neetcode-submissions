class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
       if (nums.length === 0) return 0;

        let ue = nums[0];
        let ie = 1;

        for(let i = 1; i < nums.length; i++) {
            if(ue !== nums[i]) {
                const tmp = nums[i];
                nums[ie] = nums[i];
                nums[i] = tmp;
                ue = nums[i];
                ie++;
            }
        }

        return ie;
    }
}
