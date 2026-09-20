class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length) {return false;}
        const map = new Map<string, number>();
        for(let s of s1) {
            map.set(s, (map.get(s) || 0) + 1);
        }

        let l=0, r=0;
        let sum = s1.length;
        for(; r<s1.length; r++) {
            const s=s2[r];
            if(map.has(s)) {
                map.set(s, map.get(s)! - 1);
                sum--;
            }
        }

        const isPer = ():boolean => {
            if(sum !== 0) {return false;}
            return [...map.values()].every(i => i === 0);
        }
        if(isPer()) {return true;}

        for(; r<s2.length; r++) {
            const sr=s2[r];
            if(map.has(sr)) {
                map.set(sr, map.get(sr)! - 1);
                sum--;
            }
            const sl=s2[l];
            if(map.has(sl)) {
                map.set(sl, map.get(sl)! + 1);
                sum++;
            }

            if(isPer()) {return true;}
            l++;
        }

        return false;
    }
}
