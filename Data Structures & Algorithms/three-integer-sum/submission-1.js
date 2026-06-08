class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const triplets = [];

        let sum = -1;
        nums.sort((a, b) => a - b);

        for(let i = 0; i < nums.length; i++) {

            if(i > 0 && nums[i-1] === nums[i]) continue;

            for(let j = i+1; j < nums.length; j++) {

                if(j > i+1 && nums[j-1] === nums[j]) continue;

                for(let k = j + 1; k < nums.length; k++) {
                    
                    if(k > j+1 && nums[k-1] === nums[k]) continue;

                    sum = nums[i] + nums[j] + nums[k];

                    if(sum === 0) {
                        triplets.push([nums[i], nums[j], nums[k]]);
                    }
                }
            }
        }

        return triplets;
    }
}
