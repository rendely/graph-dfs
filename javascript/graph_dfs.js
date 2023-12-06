function isPath(graph, vertexA, vertexB) {
  // console.log(vertexA, vertexB);
  if (!graph[vertexA]) return false;
  if (graph[vertexA].indexOf(vertexB) >= 0) return true;

  for (vertex of graph[vertexA]){
    const newGraph = {...graph}
    delete newGraph[vertexA];
    if (isPath(newGraph, vertex, vertexB)) return true;
  }
  return false;
}

if (require.main === module) {
  // // add your own tests in here
  let graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  // console.log("Expecting: true");
  // console.log(isPath(graph, "jan", "john"));

  // console.log("");

  // console.log("Expecting: true");
  // console.log(isPath(graph, "jan", "carl"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log(isPath(graph, "jan", "dave"));

  const lessSimpleGraph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby", "dave"],
    dave: ["jan"],
    mittens: []
  };

  console.log(isPath(graph, 'jan', 'jambaby'))
}

module.exports = isPath;

// Please add your pseudocode to this file
// And a written explanation of your solution

// First check if vertexB is adjacent to vertexA
// If not check if any of the vertices connected to vertexA are adjacent to B
// If not check if any of the vertices connected to vertices connected to A are adjacent to B
// Continue until all nodes checked