class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countArray = Array.from({ length: nums.length + 1 }, () => []);
        const count = new Map();
        const twoValues = [];

        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        for (const [num, freq] of count) {
            countArray[freq].push(num);
        }


        // Step 3: collect top k
        const result = [];
        for (let i = countArray.length - 1; i >= 0; i--) {
            for (const num of countArray[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
