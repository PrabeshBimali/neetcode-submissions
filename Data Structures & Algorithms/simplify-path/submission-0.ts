class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path: string): string {
        let tokens = path.split("/");
        let stack = new Array<string>();

        for(const token of tokens) {
            if(token.length > 0) {
                if(token !== ".." && token !== ".") {
                    stack.push(token);
                } else if(token === "..") {
                    stack.pop();
                }
            }
        }

        return "/" + stack.join("/");
    }
}
