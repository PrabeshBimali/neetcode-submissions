class LNode {
    value: number;
    next: LNode | null;

    constructor() {
        this.value = 0;
        this.next = null;
    }
}

class LinkedList {
    private head: LNode | null;
    private tail: LNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let counter = 0;
        let currentNode = this.head;

        while(counter <= index && currentNode !== null) {
            if(counter === index) {
                return currentNode.value;
            }

            counter++;
            currentNode = currentNode.next;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        if(this.head === null) {
            this.head = new LNode();
            this.head.value = val;
            this.head.next = null;
            this.tail = this.head;
            return;
        }

        const prevHead = this.head;
        this.head = new LNode();        
        this.head.value = val;
        this.head.next = prevHead;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        if(this.tail === null) {
            this.tail = new LNode();
            this.tail.value = val;
            this.tail.next = null;
            this.head = this.tail;
            return;
        }

        const prevTail = this.tail;
        this.tail = new LNode();
        this.tail.value = val;
        this.tail.next = null;
        prevTail.next = this.tail;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */

    remove(index: number): boolean {
        let counter = 0;
        let currentNode = this.head;
        let prevNode = null;

        while(counter <= index && currentNode !== null) {
            if(counter === index) {
                if(prevNode === null) {
                    this.head = currentNode.next;
                    currentNode = null;
                    return true;
                } else if(currentNode.next === null) {
                    this.tail = prevNode;
                    prevNode.next = null;
                    currentNode = null;
                    return true;
                }

                prevNode.next = currentNode.next;
                currentNode = null;
                return true;
            }

            prevNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }

        return false;


    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const arr = new Array<number>();
        let currentNode = this.head;
        while(currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }
}