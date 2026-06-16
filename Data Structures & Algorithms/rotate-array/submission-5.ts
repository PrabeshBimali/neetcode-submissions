class Solution {


    reverse(array: number[], start: number, end: number) {
        if(start === end) return;

        while(start < end) {
            const tmp = array[end];
            array[end] = array[start];
            array[start] = tmp;
            end--;
            start++;
        }
    }
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        const newK = k%nums.length;
        this.reverse(nums, 0 ,nums.length-1);
        this.reverse(nums, newK, nums.length-1);
        this.reverse(nums, 0, newK - 1);
    }
}
