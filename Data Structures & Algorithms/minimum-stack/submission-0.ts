class MinStack {

    private stack: Array<number>;
    private minStack: Array<number>;

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }

        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const val = this.stack.pop();
        if(this.minStack[this.minStack.length - 1] === val) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
