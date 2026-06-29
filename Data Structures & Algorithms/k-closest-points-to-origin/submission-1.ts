class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        let distances = [];
        
        for(let point of points) {
            const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);
            distances.push(distance);
        }

        let leftPointer = -1;
        let start = 0;
        let end = distances.length - 1;

        while(leftPointer !== k-1) {
            const pivot = distances[end];
            leftPointer = start
            let index = start;
            while(index < end) {
                if(distances[index] <= pivot) {
                    [distances[index], distances[leftPointer]] = [distances[leftPointer], distances[index]];
                    [points[index], points[leftPointer]] = [points[leftPointer], points[index]];
                    leftPointer++;
                }

                index++;
            }

            [distances[end], distances[leftPointer]] = [distances[leftPointer], distances[end]];
            [points[end], points[leftPointer]] = [points[leftPointer], points[end]];
            
            if(leftPointer > k-1) {
                end = leftPointer - 1;            
            } else if(leftPointer < k-1) {
                start = leftPointer + 1;            
            }
        }

        return points.slice(0, k);
    }
}
