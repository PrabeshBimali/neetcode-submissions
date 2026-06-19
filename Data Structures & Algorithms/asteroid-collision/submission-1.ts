class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids: number[]): number[] {
        const stack = new Array<number>();

        outerLoop: for(const n of asteroids) {
            if(n >= 0) {
                stack.push(n);
            } else {
                let top = stack[stack.length - 1];
                let isDestroyed = false;
                while(stack.length > 0 && top > 0) {
                    if(top < Math.abs(n)) {
                        stack.pop();
                        top = stack[stack.length - 1];
                    } else if(top === Math.abs(n)) {
                        isDestroyed = true;
                        stack.pop();
                        break;
                    } else {
                        isDestroyed = true;
                        break;
                    }
                }

                if(!isDestroyed) {
                    stack.push(n)
                }

            }
        }

        return stack;
    }
}
