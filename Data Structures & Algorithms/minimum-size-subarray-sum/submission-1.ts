class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        const prefixSum = Array<number>();

        let sum = 0;
        for(const num of nums) {
            sum+=num;
            prefixSum.push(sum);
        }
        console.log(prefixSum)

        let length = 0;

        while(length < prefixSum.length) {
            let index = 0;
            while(index + length <= prefixSum.length) {
                let lastIndex = index+length;
                let val = -1;
                if(length === 0){
                    val = nums[index];
                } else if(index === 0) {
                    val = prefixSum[lastIndex];
                } else {
                    val = prefixSum[lastIndex] - prefixSum[index - 1];
                }
            
                if(val >= target) return length+1;
                index++;
            }

            length++;
        }

        return 0;
    }
}
