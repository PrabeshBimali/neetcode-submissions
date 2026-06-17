class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let half = nums.length/2;
        let answer = nums[0];
        let count = 1;

        for(let i = 1; i < nums.length; i++) {
            if(answer !== nums[i]) {
                count--;
                if(count === 0) {
                    answer = nums[i];
                }
            }
            count++;

        }

        return answer;
    }
}
