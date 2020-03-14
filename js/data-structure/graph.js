"use strict";
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1);
    }
    removeVertex(vertex) {
        for (let tmpVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, tmpVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(startVertex) {
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;
        function dfs(vertex) {
            if (!vertex)
                return;
            result.push(vertex);
            visited[vertex] = true;
            for (let neighbor of adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            }
        }
        dfs(startVertex);
        return result;
    }
    depthFirstIterative(startVertex) {
        let stack = [];
        let result = [];
        let visited = {};
        let vertex;
        visited[startVertex] = true;
        stack.push(startVertex);
        while (stack.length) {
            vertex = stack.pop();
            result.push(vertex);
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }
    breadthFirstIterative(startVertex) {
        let result = [];
        let visited = {};
        let queue = [];
        let vertex;
        visited[startVertex] = true;
        queue.push(startVertex);
        while (queue.length) {
            vertex = queue.shift();
            visited[vertex] = true;
            result.push(vertex);
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
}
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));
console.log(g.breadthFirstIterative("A"));
//# sourceMappingURL=graph.js.map