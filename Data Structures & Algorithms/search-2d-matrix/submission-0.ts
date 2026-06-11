class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const ROW = matrix.length - 1;
        const COL = matrix[0].length;
        let left = 0;
        let right = ROW * COL + (COL - 1);

        while(left <= right) {
            let mid = Math.floor((left+right)/2);
            let i = Math.floor(mid/COL);
            let j = mid%COL;

            let value = matrix[i][j];

            if(target === value) return true;

            if(target > value) {
                left = mid+1;
            } else {
                right = mid - 1;
            }
        }

        return false;

    }
}
