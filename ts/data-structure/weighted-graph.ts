namespace dataStructure {
  class WeightedGraph {
    adjacencyList: { [key: string]: {}[] };
    constructor() {
      this.adjacencyList = {};
    }

    addVertex(vertex: string) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }

    addEdge(vertex1: string, vertex2: string, weight: number) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  interface PriorityQueueValue {
    val: string;
    priority: number;
  }

  class PriorityQueue {
    values: PriorityQueueValue[];
    
    constructor() {
      this.values = [];
    }

    enqueue(val: string, priority: number) {
      this.values.push({val, priority});
      this.sort();
    }

    dequeue(): PriorityQueueValue | undefined {
      return this.values.shift();
    }

    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    }
  }

  let g = new WeightedGraph();
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addEdge("A", "B", 9);
  g.addEdge("A", "C", 5);
  g.addEdge("B", "C", 7);

  let q = new PriorityQueue();
  q.enqueue("B", 3);
  q.enqueue("C", 5);
  q.enqueue("D", 2);
  q.enqueue("Q", 20);
  console.log(q.values);
  console.log(q.dequeue());
  console.log(q.dequeue());
}
