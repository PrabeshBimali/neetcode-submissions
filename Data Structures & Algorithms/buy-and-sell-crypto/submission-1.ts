class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let buyingPriceIndex = 0;

        for(let i = 1; i < prices.length; i++) {
            let profit = 0;
            if(prices[i] < prices[buyingPriceIndex]) {
                buyingPriceIndex = i
                continue;
            } 

            profit = prices[i] - prices[buyingPriceIndex];

            if(profit > maxProfit) maxProfit = profit;

            
        }

        return maxProfit;
    }
}
