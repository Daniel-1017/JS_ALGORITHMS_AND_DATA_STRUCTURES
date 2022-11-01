class MaxBinaryHeap {
  constructor() {
    this.val = [41, 39, 33, 18, 27, 12];
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
}

const heap = new MaxBinaryHeap();

// MBH -> add the element at the end and then bubble it up
