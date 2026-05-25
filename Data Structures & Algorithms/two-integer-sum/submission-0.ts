class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const indexMap = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            const current = nums[i]
            const complement = target - current;

            if(indexMap.has(complement)) {
                return [indexMap.get(complement), i]
            }

            indexMap.set(current, i)
        }

        return []
    }
}
