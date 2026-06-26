/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let left = 1;
        let right = n;
        let mid = 0;

        while(left <= right) {
            mid = Math.floor((left + right)/2);

            let ans = guess(mid);
            if(ans === -1) {
                right = mid - 1;
            } else if(ans === 1)  {
                left = mid + 1;
            } else {
                break;
            }
        }

        return mid;
    }
}
