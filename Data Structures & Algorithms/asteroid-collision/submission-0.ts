class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids: number[]): number[] {
        const stack = new Array<number>();
        const answer = new Array<number>();

        outerLoop: for(const n of asteroids) {
            if(n >= 0) {
                stack.push(n);
            } else {
                while(stack.length > 0) {
                    const top = stack[stack.length - 1];
                    if(top < Math.abs(n)) {
                        stack.pop();
                    } else if(top === Math.abs(n)) {
                        stack.pop();
                        continue outerLoop;
                    } else {
                        continue outerLoop;
                    }
                }

                answer.push(n);
            }
        }

        for(const n of stack) {
            answer.push(n);
        }

        return answer;
    }
}
