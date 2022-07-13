import Node from './Node';

class MyGraph {
  routes: string[][];

  nodes: Map<string, Node>;

  constructor(routes: string[][]) {
    this.routes = routes;
    this.nodes = new Map();
    this.init();
  }

  init() {
    this.routes.forEach(([a, b, cost]) => {
      if (!this.nodes.has(a)) {
        this.nodes.set(a, new Node(a));
      }

      if (!this.nodes.has(b)) {
        this.nodes.set(b, new Node(b));
      }

      const start = this.nodes.get(a);
      const end = this.nodes.get(b);

      if (start && end) {
        start.addNeighbor(end, Number(cost));
      }
    });
  }

  draw() {
    const nodes = Array.from(this.nodes).map((node) => ({ id: node[0], label: node[0] }));
    const edges = this.routes.map((route, index) => (
      {
        source: route[0],
        target: route[1],
        label: route[2],
      }
    ));
    return {
      nodes,
      edges,
    };
  }

  static travelCost(origin: Node, destination: Node) {
    return origin.getNeighborCost(destination.label);
  }

  static untraveledCost(origin: Node, destination: Node, seen: Node | null) {
    let cost = 0;

    origin.neighbors.forEach((value, key) => {
      if (key !== destination.label) {
        if (!seen || key !== seen.label) {
          cost += value[1];
        }
      }
    });

    return cost * 2;
  }

  getNode(label: string) {
    return this.nodes.get(label) || new Node(label);
  }

  calculateCost(route: string[]) {
    let totalCost = 0;
    let untraveledCost = 0;
    let lastSeen = null;

    for (let i = 0; i <= route.length - 2; i += 1) {
      const nodeA = this.getNode(route[i]);
      const nodeB = this.getNode(route[i + 1]);

      totalCost += MyGraph.travelCost(nodeA, nodeB) + untraveledCost;
      untraveledCost = MyGraph.untraveledCost(nodeA, nodeB, lastSeen);
      lastSeen = nodeA;
    }

    return totalCost;
  }
}

export default MyGraph;
