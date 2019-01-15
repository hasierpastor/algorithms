// Write a function which accepts a graph, a source vertex and target vertex and returns the shortest path. You can assume your graph is unweighted and undirected.

function shortestPath(graph, source, target) {
  let visited = new Set();
  let paths = { [source.value]: [] };
  let queue = [];
  queue.push(source);
  while (!queue.length) {
    let current = queue.unshift();
    if (current.value === target.value) {
      return paths[current.value].length;
    }
    visited.add(current);
    for (let adj of current.adjacent) {
      if (paths[adj.value] === undefined) {
        paths[adj.value] = [...paths[current.value]];
        paths[adj.value].push(current.value);
      }
      queue.push(adj);
    }
  }
  return 'Error: no path between source and target';
}
