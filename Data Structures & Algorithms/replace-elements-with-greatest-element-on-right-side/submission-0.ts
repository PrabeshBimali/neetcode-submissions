class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const arrCpy = arr;
        let currentHigh = -1;

        for(let i = arr.length - 1; i >= 0; i--) {
            let currentNum = arr[i];
            arrCpy[i] = currentHigh;

            if(currentNum > currentHigh) {
                currentHigh = currentNum;
            }
        }

        return arrCpy;
    }
}
