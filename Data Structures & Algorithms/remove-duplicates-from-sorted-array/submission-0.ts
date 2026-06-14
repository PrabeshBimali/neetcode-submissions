class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let uElement = nums[0];
        let index = 1;
        
        while (index < nums.length) {
            if(uElement === nums[index]) {
                nums.splice(index, 1);
                continue;
            }

            uElement = nums[index];
            index++;
        }

        return nums.length;
    }
}
