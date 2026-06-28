class Solution {
    private quickSort(array: number[], start: number, end: number): number[] {
        if(start >= end) return array;
    
        let index = start;
        let leftPointer = start;
        let pivotValue = array[end];

        while(index < end) {
            if(array[index] <= pivotValue) {
                let temp = array[leftPointer];
                array[leftPointer] = array[index];
                array[index] = temp;
                leftPointer++;     
            }
            index++;
        }

        array[index] = array[leftPointer];
        array[leftPointer] = pivotValue;
   
        this.quickSort(array, start, leftPointer-1);
        this.quickSort(array, leftPointer+1, end);

        return array;
    }

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        return this.quickSort(nums, 0, nums.length-1);
    }
}
