class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    const vertex1Key = this.adjacencyList[vertex1];
    const vertex2Key = this.adjacencyList[vertex2];
    vertex1Key.push(vertex2), vertex2Key.push(vertex1);
  }
}

const graph = new Graph();
