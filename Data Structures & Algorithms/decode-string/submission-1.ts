class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s: string): string {
        const stack = new Array<string>();

        for(let i = 0; i < s.length; i++) {

            if(s[i] !== "]") {
                stack.push(s[i])
            } else {
                let strToRepeat = "";
                let char = "";

                while(true) {
                    char = stack.pop();

                    if(char === "[") break;
                    strToRepeat = char + strToRepeat;
                }

                let numStr = "";
                while(true) {
                    if(isNaN(parseFloat(stack[stack.length - 1]))) break;
                    char = stack.pop();

                    numStr = char + numStr;
                }

                let repeat = Number(numStr);

                let subStr = "";
                while(repeat > 0) {
                    subStr += strToRepeat;
                    repeat -= 1;
                }

                stack.push(subStr);

            }
        } 

        return stack.join("");       
    }
}
