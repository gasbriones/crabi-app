class Node {
  label: string;

  neighbors: Map<string, [Node, number]>;

  constructor(label: string) {
    this.label = label;
    this.neighbors = new Map();
  }

  addNeighbor(node: Node, cost: number) {
    this.neighbors.set(node.label, [node, cost]);
    node.neighbors.set(this.label, [this, cost]);
  }

  getNeighborCost(label: string) {
    // @ts-ignore
    return this.neighbors.get(label)[1];
  }

  isNeighbor(node: Node) {
    return this.neighbors.has(node.label);
  }
}

export default Node;
