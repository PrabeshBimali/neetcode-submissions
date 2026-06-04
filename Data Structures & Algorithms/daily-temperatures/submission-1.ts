class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array<number>(temperatures.length).fill(0);
        const stack = new Array<number>

        for(let i = 0; i < temperatures.length; i++) {
            while(temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop();
                const difference = i - prevIndex;
                result[prevIndex] = difference;
            }

            stack.push(i);
        }

        return result;
        
    }
}
