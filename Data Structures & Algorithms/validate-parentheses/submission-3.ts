class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const bracesArr = new Array<string>();

        if(s.length%2 !== 0) return false;

        for(const brace of s) {
            if(brace === "[" || brace === "{" || brace === "(") {
                bracesArr.push(brace);
            } else {
                const c = bracesArr.pop();

                if(c === "(" && brace === ")") continue;
                if(c === "{" && brace === "}") continue;
                if(c === "[" && brace === "]") continue;

                return false;
            }
        }

        if(bracesArr.length > 0) return false;

        return true;
    }
}
