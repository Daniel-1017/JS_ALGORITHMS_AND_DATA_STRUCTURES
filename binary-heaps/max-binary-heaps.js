class MaxBinaryHeap {
  constructor() {
    this.val = [55, 39, 41, 18, 27, 12, 33];
  }
  insert(val) {
    this.val.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.val.length - 1;
    const element = this.val[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.val[parentIdx];
      if (element <= parent) break;
      this.val[parentIdx] = element;
      this.val[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    const max = this.val[0];
    const end = this.val.pop();
    if (this.val.length > 0) {
      this.val[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.val.length;
    const element = this.val[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.val[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.val[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.val[idx] = this.val[swap];
      this.val[swap] = element;
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();

// MBH -> add the element at the end and then bubble it up
