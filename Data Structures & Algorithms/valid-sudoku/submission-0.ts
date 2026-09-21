class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const set = new Set<string>();
        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                const char = board[i][j];
                if('.'===char) {continue;}
                if(set.has(char)) {return false;}
                else {set.add(char);}
            }
            set.clear();
        }

        for(let j=0; j<9; j++) {
            for(let i=0; i<9; i++) {
                const char = board[i][j];
                if('.'===char) {continue;}
                if(set.has(char)) {return false;}
                else {set.add(char);}
            }
            set.clear();
        }

        for(let i=0; i<3; i++) {
            for(let j=0; j<3; j++) {
                for(let k=0; k<3; k++) {
                    for(let l=0; l<3; l++) {
                        const ik = i*3+k, jl = j*3+l;
                        const char = board[ik][jl];
                        if('.'===char) {continue;}
                        if(set.has(char)) {return false;}
                        else {set.add(char);}
                    }
                }
                set.clear();
            }
        }

        return true;
    }
}
