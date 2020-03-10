interface GraphList {
  [key: string]: string[];
}

class Graph {
  adjacencyList: GraphList;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v != vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v != vertex1
    );
  }

  removeVertex(vertex: string) {
    for (let tmpVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, tmpVertex);
    }
    
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addEdge("Dallas", "Aspen");
g.removeVertex("Dallas");
g.removeEdge("Tokyo", "Dallas");
