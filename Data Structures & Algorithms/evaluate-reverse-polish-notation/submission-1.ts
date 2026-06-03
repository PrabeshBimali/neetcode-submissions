class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let result = 0;
        let numStack: number[] = [];

        for(const s of tokens) {
          
            const isOperator = s === "+" || s === "-" || s === "*" || s === "/";

            if(!isOperator) {
                numStack.push(parseInt(s));
                continue;
            }

            const top = numStack.pop()!;
            const secondTop = numStack.pop()!;
            
            switch(s) {
                case "+":
                    result = secondTop + top;
                    numStack.push(result);
                    break;
                case "-":
                    result = secondTop - top;
                    numStack.push(result);
                    break;
                case "*":
                    result = secondTop * top;
                    numStack.push(result);
                    break;
                case "/":
                    result = Math.trunc(secondTop / top);
                    numStack.push(result);
                    break;
            }
        }

        return numStack[0];
        
    }
}
