

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (var key in this.edges) {
    if (this.edges[key].includes(node)) {
      delete this.edges[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return !!this.edges[fromNode + ':' + toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode + ':' + toNode] = [fromNode, toNode];
  this.edges[toNode + ':' + fromNode] = [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode  + ':' + toNode];
  delete this.edges[toNode + ':' + fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


