class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board: string[][]): boolean {
        
        const map = new Map<number, number[]>();
        const boardLength = board.length;

        for(let i = 0; i < boardLength; i++) {
            for(let j = 0; j < boardLength; j++) {
                if(isNaN(Number(board[i][j]))) continue;

                const key = parseInt(board[i][j]);
                const calculatedVal = boardLength * i + j;

                if(map.has(key)) {
                    const value = map.get(key);
                    for(const n of value) {
                        if(calculatedVal%boardLength === n%boardLength) return false;
                        if(Math.floor(calculatedVal/boardLength) === Math.floor(n/boardLength)) return false;

                        const test1 = Math.floor(Math.floor(calculatedVal/boardLength)/3);
                        const test2 = Math.floor(Math.floor(n/boardLength)/3);
                        const test3 = Math.floor((calculatedVal%boardLength)/3);
                        const test4 = Math.floor((n%boardLength)/3);

                        if(test1 === test2 && test3 === test4) {
                            return false;
                        }
                    }
                    
                    const newArr = [...value, calculatedVal]
                    map.set(key, newArr);
                } else {
                    map.set(key, [calculatedVal]);
                }
            }
        }

        return true;
    }
}
