class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    // without sorting
    findKthLargest(nums: number[], k: number): number {
        let indexToFind = nums.length - k;
        let start = 0;
        let end = nums.length - 1;
        let leftPointer = -1;

        while(leftPointer !== indexToFind) {
            leftPointer = start;
            let index = start;
            let pivot = nums[end];

            while(index < end) {
                if(nums[index] <= pivot) {
                    [nums[leftPointer], nums[index]] = [nums[index], nums[leftPointer]];
                    leftPointer++;
                }
                index++;
            }

            [nums[leftPointer], nums[index]] = [nums[index], nums[leftPointer]];

            if(indexToFind > leftPointer) {
                start = leftPointer + 1;
            } else if(indexToFind < leftPointer) {
                end = leftPointer - 1;
            }
        }

        return nums[indexToFind];
    }
}
