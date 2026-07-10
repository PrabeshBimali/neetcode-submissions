class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        
        let result = new Array<Array<number>>();

        function sum(start = 0, currentSum = 0, path = []) {
            if(currentSum === target) {
                result.push([...path]);
                return;
            }

            if(currentSum > target) return;

            for(let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                sum(i, currentSum + nums[i], path);
                path.pop();
            }
        }

        sum();
        return result;
    }
}
