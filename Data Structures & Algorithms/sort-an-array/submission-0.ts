class Solution {
    merge(array: number[], left: number, mid: number, right: number) {
        const copy = [...array];
        let rightIndex = mid + 1;
        let index = left;

        while(left <= mid && rightIndex <= right) {
            if(copy[left] > copy[rightIndex]) {
                array[index] = copy[rightIndex];
                rightIndex++;
            } else {
                array[index] = copy[left];
                left++;        
            }

            index++;
        }

        while(left <= mid) {
            array[index] = copy[left];
            left++;   
            index++; 
        }

        while(rightIndex <= right) {
            array[index] = copy[rightIndex];
            rightIndex++;  
            index++;  
        }

    }

    mergeSort(array: number[], left: number, right: number): number[] {
        if(left >= right) return array;
    
        let mid = Math.floor((left + right)/2);
    
        this.mergeSort(array, left, mid);
        this.mergeSort(array, mid+1, right);

        this.merge(array, left, mid, right);

        return array;
    
    }
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        return this.mergeSort(nums, 0, nums.length-1);
    }
}
