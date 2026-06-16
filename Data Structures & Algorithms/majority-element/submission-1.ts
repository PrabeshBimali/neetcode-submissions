class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let map = new Map<number, number>();
        let half = nums.length/2;
        let answer = nums[0];

        for(let i = 0; i < nums.length; i++) {
            if(map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
                if(map.get(nums[i]) > half) {
                    answer = nums[i];
                    break;
                }
            } else {
                map.set(nums[i], 1);
            }
        }

        return answer;
    }
}
