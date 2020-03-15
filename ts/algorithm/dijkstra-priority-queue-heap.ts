namespace algorithm {
  class Node {
    value: string;
    priority: number;
    constructor(value: string, priority: number) {
      this.value = value;
      this.priority = priority;
    }
  }

  class PriorityQueue {
    values: Node[];

    constructor() {
      this.values = [];
    }

    enqueue(value: string, priority: number) {
      let newNode = new Node(value, priority);
      this.values.push(newNode);
      this.bubbleUp();
    }

    swap(index1: number, index2: number) {
      let tmpNode = this.values[index1];
      this.values[index1] = this.values[index2];
      this.values[index2] = tmpNode;
    }

    bubbleUp() {
      let index = this.values.length - 1;
      let parentIndex = Math.floor((index - 1) / 2);

      while (index > 0 && this.values[index].priority < this.values[parentIndex].priority) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
    }

    dequeue(): Node {
      let minNode = this.values[0];
      let endNode = this.values.pop();

      if (this.values.length > 0) {
        this.values[0] = endNode!;
        this.sinkDown();
      }

      return minNode;
    }

    sinkDown() {
      let parentIndex = 0;
      let leftIndex = 2 * parentIndex + 1;
      let rightIndex = 2 * parentIndex + 2;
      let leftNode: Node | null;
      let rightNode: Node | null;
      let childIndex: number;

      while (parentIndex < this.values.length) {
        if (leftIndex < this.values.length) {
          leftNode = this.values[leftIndex];
        } else {
          leftNode = null;
        }

        if (rightIndex < this.values.length) {
          rightNode = this.values[rightIndex];
        } else {
          rightNode = null;
        }

        if (!leftNode) {
          childIndex = rightIndex;
        } else if (!rightNode) {
          childIndex = leftIndex;
        } else if (leftNode.priority < rightNode.priority) {
          childIndex = leftIndex;
        } else {
          childIndex = rightIndex;
        }

        if (this.values[parentIndex] && this.values[childIndex]
            && this.values[parentIndex].priority > this.values[childIndex].priority) {
          this.swap(parentIndex, childIndex);
          parentIndex = childIndex;
          leftIndex = 2 * parentIndex + 1;
          rightIndex = 2 * parentIndex + 2;
        } else {
          break;
        }
      }

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
      let node: Node;
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

        if (node.value === endVertex) {
          tmpVertex = node.value;
          path.push(tmpVertex);

          while (previous[tmpVertex]) {
            tmpVertex = previous[tmpVertex]!;
            path.push(tmpVertex);
          }

          break;
        }

        for (let neighbor of this.adjacencyList[node.value]) {
          weight = neighbor.weight + distance[node.value];

          if (weight < distance[neighbor.vertex]) {
            distance[neighbor.vertex] = weight;
            previous[neighbor.vertex] = node.value;
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
