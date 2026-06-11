class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let currentArea = 0;
        for(let i = 0; i < heights.length; i++) {
            for(let j = i + 1; j < heights.length; j++) {
                let height = Math.min(heights[i], heights[j]);
                let length = j - i;
                currentArea = height * length;

                maxArea = currentArea > maxArea ? currentArea : maxArea;
            }
        }

        return maxArea;
    }
}
