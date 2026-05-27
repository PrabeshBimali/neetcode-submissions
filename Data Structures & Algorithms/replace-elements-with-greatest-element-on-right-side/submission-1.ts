class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let currentHigh = -1;

        for(let i = arr.length - 1; i >= 0; i--) {
            let currentNum = arr[i];
            arr[i] = currentHigh;

            if(currentNum > currentHigh) {
                currentHigh = currentNum;
            }
        }

        return arr;
    }
}
