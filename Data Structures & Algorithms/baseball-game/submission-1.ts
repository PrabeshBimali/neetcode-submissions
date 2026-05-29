class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const arr = new Array<number>();

        for (let i = 0; i < operations.length; i++) {
            const op = operations[i];
            if(op === "+") {
                const a = arr.pop();
                const b = arr.pop();
                arr.push(b);
                arr.push(a);
                arr.push(a + b);
            } 
            else if(op === "C") {
                arr.pop();
            } 
            else if(op === "D") {
                const a = arr.pop();
                arr.push(a);
                arr.push(a * 2);
            }
            else {
                arr.push(Number(operations[i]));
            }
        }

        return arr.reduce((a, c) => a + c, 0);
    }
}
