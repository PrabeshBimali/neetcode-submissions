class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            const toFind = target - nums[i];

            if(map.has(toFind)) {
                return [map.get(toFind), i];
            }

            map.set(nums[i], i);
        }

        return [];
    }
}
