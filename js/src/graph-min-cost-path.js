// Graph Min Cost path
// Dijkstra's algorithm
// Input type: Object<graph: Object, start: string, end: string
// Sample input

/*
{
  "graph": {
    "A": [
      { "name": "B", "cost": 4 },
      { "name": "C", "cost": 2 }
    ],
    "B": [
      { "name": "C", "cost": 5 },
      { "name": "D", "cost": 10 }
    ],
    "C": [
      { "name": "E", "cost": 3 }
    ],
    "D": [
      { "name": "F", "cost": 11 }
    ],
    "E": [
      { "name": "D", "cost": 4 }
    ],
    "F": []
  },
  "start": "A",
  "end": "F"
}
*/

let costs = {};
let path = [];
let cost = 0;

const findMinCostNode = (currentNode, nodes) => {
  let min = null;
  let nextNode = null;
  let l = nodes.length;
  
  
  for(let i=0; i<l; i++) {
    nextNode = nodes[i];
    
    if (costs[nextNode.name] === undefined) {
      costs[nextNode.name] = nextNode.cost;
    } else if (costs[nextNode.name] > costs[currentNode] + nextNode.cost) {
      costs[nextNode.name] = costs[currentNode] + nextNode.cost;
    }
    
    if (min === null) {
      min = nextNode;
    } else if (costs[min.name] > costs[nextNode.name]) {
      min = nextNode;
    }
  }
  
  return min;
}

const updatePathAndCost = (min) => {
  path.push(min.name);
  cost += costs[min.name];
}

const findMinimum = (graph, startNode, endNode) => {
  costs[startNode] = 0;
  
  path.push(startNode);
  let min = findMinCostNode(startNode, graph[startNode]);
  updatePathAndCost(min);
  
  while(min.name !== endNode) {
    min = findMinCostNode(min.name, graph[min.name]);
    updatePathAndCost(min);
  }
  
  return { path, costs, cost };
}

return execute = (string) => {
  const input = JSON.parse(string);
  
  const result = findMinimum(input.graph, input.start, input.end);
  console.log(result.costs);
  console.log(result.path);
  console.log(result.cost);
  
  let res = 'Costs: ' + result.costs.toString() + '\n';
  res += 'Path: ' + result.path.toString() + '\n';
  res += 'Cost: ' + result.cost.toString() + '\n';

  return res;
}
