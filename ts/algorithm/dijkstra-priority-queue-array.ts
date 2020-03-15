namespace algorithm {
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
      this.values.push({ val, priority });
      this.sort();
    }

    dequeue(): PriorityQueueValue | undefined {
      return this.values.shift();
    }

    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    }
  }

  interface WeightedVertex {
    vertex: string;
    weight: number;
  }

  class WeightedGraph {
    adjacencyList: { [key: string]: WeightedVertex[] };
    constructor() {
      this.adjacencyList = {};
    }

    addVertex(vertex: string) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }

    addEdge(vertex1: string, vertex2: string, weight: number) {
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
    }

    dijkstra(startVertex: string, endVertex: string): string[] {
      let nodes = new PriorityQueue();
      let distance: { [key: string]: number } = {};
      let previous: { [key: string]: string | null } = {};
      let node: PriorityQueueValue;
      let weight: number;
      let tmpVertex: string;
      let path: string[] = [];

      for (let vertex in this.adjacencyList) {
        if (vertex === startVertex) {
          nodes.enqueue(vertex, 0);
          distance[vertex] = 0;
        } else {
          nodes.enqueue(vertex, Infinity);
          distance[vertex] = Infinity;
        }
        previous[vertex] = null;
      }

      while (nodes.values.length) {
        node = nodes.dequeue()!;

        if (node.val === endVertex) {
          tmpVertex = node.val;
          path.push(tmpVertex);

          while (previous[tmpVertex]) {
            tmpVertex = previous[tmpVertex]!;
            path.push(tmpVertex);
          }

          break;
        }

        for (let neighbor of this.adjacencyList[node.val]) {
          weight = neighbor.weight + distance[node.val];

          if (weight < distance[neighbor.vertex]) {
            distance[neighbor.vertex] = weight;
            previous[neighbor.vertex] = node.val;
            nodes.enqueue(neighbor.vertex, weight);
          }
        }
      }

      return path.reverse();
    }
  }

  var graph = new WeightedGraph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "E", 3);
  graph.addEdge("C", "D", 2);
  graph.addEdge("C", "F", 4);
  graph.addEdge("D", "E", 3);
  graph.addEdge("D", "F", 1);
  graph.addEdge("E", "F", 1);

  console.log(graph.dijkstra("A", "E"));
  console.log(graph.dijkstra("A", "F"));
}
