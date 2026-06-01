class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let productAll = 1;
        let outputArr = new Array<number>();
        let hasZero = false;
        
        for(const num of nums) {
            if(num === 0 && !hasZero) {
                hasZero = true;
                continue;
            }

            productAll *= num
        }

        for(const num of nums) {
            if(hasZero && num !== 0) {
                outputArr.push(0);
                continue;
            }

            if(num === 0) {
                outputArr.push(productAll);
                continue;
            }
            
            const val = productAll/num;
            outputArr.push(val);
        }

        return outputArr;

    }
}
