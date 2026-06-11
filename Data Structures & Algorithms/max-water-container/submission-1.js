class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        let currentArea = 0;

        while(left < right) {
            let height = Math.min(heights[left], heights[right]);
            let width = right - left;
            currentArea = height * width;
            maxArea = currentArea > maxArea ? currentArea: maxArea;

            if(heights[left] === height) left++;
            if(heights[right] === height) right--;
        }

        return maxArea;
    }
}
