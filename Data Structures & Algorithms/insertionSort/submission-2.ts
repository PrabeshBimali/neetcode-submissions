/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]): Pair[][] {
        if(pairs.length === 0) return [];
        const arr: Pair[][] = [];
        arr.push([...pairs]);

        for(let i = 1; i < pairs.length; i++) {
            let j = i - 1;
            while(j >= 0 && pairs[j].key > pairs[j+1].key) {
                let tmp = pairs[j];
                pairs[j] = pairs[j+1];
                pairs[j+1] = tmp;
                j--;
            }
            arr.push([...pairs]);

        }

        return arr;
    }
}
