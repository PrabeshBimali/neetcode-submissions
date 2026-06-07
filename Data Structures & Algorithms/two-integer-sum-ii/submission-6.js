class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let indexes = [0, 0];

        for(let i = 0; i < numbers.length; i++) {
            indexes[0] = i+1;
            const toFind = target - numbers[i];
            let left = i + 1;
            let right = numbers.length - 1;

            while(left <= right) {

                let middle = Math.floor((right+left)/2);

                if(toFind === numbers[middle]) {
                    indexes[1] = middle+1;
                    return indexes;
                } else if(toFind > numbers[middle]) {
                    left = middle + 1;
                } else if(toFind < numbers[middle]) {
                    right = middle -1;
                }
            }
        }
    }
}
