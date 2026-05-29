class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = new Array<string>();

        if(s.length%2 !== 0) return false;

        for(const brace of s) {
            if(brace === "[" || brace === "{" || brace === "(") {
                stack.push(brace);
            } else {
                const c = stack.pop();

                if(c === "(" && brace === ")") continue;
                if(c === "{" && brace === "}") continue;
                if(c === "[" && brace === "]") continue;

                return false;
            }
        }


        return stack.length === 0;
    }
}
