class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0, maxValue = 0;
        for(let r = 1; r < prices.length; r++) {
            // if(l >= r) {continue;}
            if(prices[l] < prices[r]) {
                maxValue = Math.max(maxValue, prices[r] - prices[l]);
            } else {
                l = r;
            }
        }

        return maxValue;
    }
}
