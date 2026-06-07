class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        let indexes = [0, 0]

        while(left < right) {
            const sum = numbers[left] + numbers[right];

            if(sum > target){
                right--;
            } else if(sum < target) {
                left++;
            } else if(sum === target) {
                indexes[0] = left+1;
                indexes[1] = right+1;
                break;
            }

        }    

        return indexes;    
    }
}
