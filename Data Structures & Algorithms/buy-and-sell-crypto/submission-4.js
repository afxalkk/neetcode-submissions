class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy_price = prices[0];
        let max_profit = 0;
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < buy_price) {
                buy_price = prices[i];
            } else {
                const current_price = prices[i] - buy_price;
                max_profit = Math.max(current_price, max_profit);
            }
        }
        return max_profit;
    }
}
