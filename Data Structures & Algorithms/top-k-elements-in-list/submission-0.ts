class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map<number, number>();

        for(const n of nums) {
            if(!frequencyMap.has(n)) {
                frequencyMap.set(n, 0);
            }

            frequencyMap.set(n, frequencyMap.get(n) + 1);
        }

        const sorted = [...frequencyMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(entry => entry[0]);

        return sorted.slice(0, k);
    }
}
