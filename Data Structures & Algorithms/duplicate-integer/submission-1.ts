class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash = new Map<number, number>();

        for(const val of nums) {
            if(hash.has(val)) return true;
            hash.set(val, 1);
        }

        return false;
    }
}
