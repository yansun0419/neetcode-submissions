class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map = new Map<string, number>();

        let maxLength = 0, l = 0;
        for(let r = 0; r < s.length; r++) {
            // update map
            map.set(s[r], (map.get(s[r]) ?? 0) + 1);

            const length = r-l+1;
            const maxValue = Math.max(...map.values());
            
            if(length - maxValue <= k) {
                maxLength = Math.max(maxLength, length);
            } else {
                // update map
                map.set(s[l], map.get(s[l])! - 1);
                l++;
            }
        }

        return maxLength;
    }
}
