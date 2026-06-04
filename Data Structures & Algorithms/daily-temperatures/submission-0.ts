class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array<number>();

        for(let i = 0; i < temperatures.length; i++) {
            let counter = 0;
            for(let j = i + 1; j < temperatures.length; j++) {
                counter++;
                if (temperatures[j] > temperatures[i]) break;

                if(j === temperatures.length - 1) {
                    counter = 0
                }
            }

            result.push(counter);
        }

        return result;
    }
}
