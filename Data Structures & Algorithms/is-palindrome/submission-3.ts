class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        const sl = s.toLowerCase();
        while(left < right) {

            let lCode = sl[left].charCodeAt(0);
            let rCode = sl[right].charCodeAt(0);

            while(!((lCode >= 48 && lCode <= 57) || (lCode >= 97 && lCode <= 122))){
                left+=1;

                if(left > right) return true;

                lCode = sl[left].charCodeAt(0);
            }

            while(!((rCode >= 48 && rCode <= 57) || (rCode >= 97 && rCode <= 122))) {
                right-=1;
                
                if(left > right) return true;

                rCode = sl[right].charCodeAt(0);
            }

            if(sl[left] !== sl[right]) return false;
            left += 1;
            right -= 1;
        }

        return true;
    }
}
