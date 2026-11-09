class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s: string): number {
        const len = s.length;
        const dp = Array.from({length: len}, ()=>new Array(len).fill(0))
        for(let i=0; i<len; i++) {dp[i][i]=1;}

        for(let i=len-1; i>=0; i--) {
            for(let j=i+1; j<len; j++) {
                dp[i][j] = s[i]===s[j] ?
                    dp[i+1][j-1] + 2 :
                    Math.max(dp[i+1][j],dp[i][j-1]);
            }
        }

        //console.log(dp)

        return dp[0][len-1];
    }
}
