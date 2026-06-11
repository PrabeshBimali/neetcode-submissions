class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    //[1,2,3,4,5,6,7,8]
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {
            let mid = Math.floor((left+right)/2);

            if(nums[mid] === target) return mid;

            if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
