class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums: number[]): number {
        function sum(index = 0, prevValue = 0): number {
            if(index === nums.length) {
                return prevValue;
            }

            let currentValue = prevValue ^ nums[index];
            let first = sum(index + 1, currentValue);
            currentValue = currentValue ^ nums[index];
            let second = sum(index + 1, currentValue);

            return first + second;
        }
        return sum();
    }
}
