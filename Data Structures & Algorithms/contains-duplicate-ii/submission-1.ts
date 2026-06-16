class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        const set = new Set<number>();

        for(let i = 0; i < nums.length; i++) {
            if(set.has(nums[i])) return true;
            if(set.size >= k) {
                set.delete(nums[i-k]);
            }
            
            set.add(nums[i]);
        }

        return false;
    }
}
