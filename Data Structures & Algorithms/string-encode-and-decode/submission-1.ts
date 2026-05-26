class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = "";

        for(const s of strs) {
            const prefix = `${s.length}:`;
            const newStr = prefix + s;
            encoded += newStr;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded = new Array<string>();

        let index = 0;

        let strLen = "";

        while(index < str.length) {
            if(str[index] !== ":")  {
                strLen += str[index];
                index+=1;
                continue;
            }   

            const endIndex = index + 1 + Number(strLen);
            const subStr = str.slice(index+1, endIndex);

            decoded.push(subStr);

            index = endIndex;
            strLen = "";
        } 

        return decoded;
    }
}
