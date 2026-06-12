class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const max = Math.max(...piles);
        let low = 1;
        let high = max;
        let res = high;

        while(low <= high) {
            let rate = Math.floor((low + high)/2);
            let totalHrs = 0;

            for(let i = 0; i <  piles.length; i++) {
                let val = piles[i]
                totalHrs += Math.ceil(val/rate);
            }


            if(totalHrs <= h) {
                res = rate;
                high = rate - 1;
            } else {
                low = rate + 1;
            }

        }
        return res;
    }
}
