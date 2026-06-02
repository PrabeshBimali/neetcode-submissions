class OQueue<T> {
  private items: Record<number, T> = {};
  private headIndex: number = 0;
  private tailIndex: number = 0;

  enqueue(item: T): void {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex]
    this.headIndex++;
    return item;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.headIndex];
  }

  get size(): number {
    return this.tailIndex - this.headIndex;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  clear(): void {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
}



class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let sandwichesStack = new Array<number>();
        let studentsQueue = new OQueue<number>();
        let start = 0;

        for(let i = 0; i < students.length; i++) {
            sandwichesStack[i] = sandwiches[sandwiches.length - 1 - i]
            studentsQueue.enqueue(students[i]) 
        }

        while(studentsQueue.size !== 0) {

            if(studentsQueue.peek() === sandwichesStack[sandwichesStack.length - 1]) {
                start = 0;
                studentsQueue.dequeue();
                sandwichesStack.pop();
                continue;
            }

            if(start === studentsQueue.size) break;
            
            start += 1;
            const item = studentsQueue.dequeue();
            studentsQueue.enqueue(item);


        } 

        return studentsQueue.size
    }
}
