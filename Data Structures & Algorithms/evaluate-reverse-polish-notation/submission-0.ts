class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let result = 0;
        let numStack: number[] = [];

        for(const s of tokens) {
            console.log(numStack);
            switch(s) {
                case "+":
                    result = numStack.pop()! + numStack.pop()!;
                    numStack.push(result);
                    break;
                case "-":
                    const a = numStack.pop()!;
                    const b = numStack.pop()!;
                    result = b - a;
                    numStack.push(result);
                    break;
                case "*":
                    result = numStack.pop()! * numStack.pop()!;
                    numStack.push(result);
                    break;
                case "/":
                    const divisor = numStack.pop()!;
                    const dividend = numStack.pop()!;
                    result = Math.trunc(dividend / divisor);
                    numStack.push(result);
                    break;
                default:
                    numStack.push(parseInt(s));
            }
        }

        return numStack[0];
        
    }
}
