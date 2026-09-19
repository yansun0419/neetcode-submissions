class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set<string>();
        let l = 0, max = 0;
        for(let r = 0; r < s.length; r++) {
            const curr = s[r];
            if(!set.has(curr)) {
                set.add(curr);
                max = Math.max(max, set.size);
            } else {
                while(true) {
                    const lVal = s[l];
                    l++;
                    if(lVal === curr) {break;} // no need to 
                    set.delete(lVal);
                }
            }
        }

        return max;
    }
}
