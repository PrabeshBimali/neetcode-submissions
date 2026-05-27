class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let indexTracker = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== val ) {
              nums[indexTracker] = nums[i];
              indexTracker+=1;
            }
        }

        return indexTracker;
    }
}
