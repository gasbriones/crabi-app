export type DrawDataType = {
  nodes: {
    id: any,
    label: any
  }[],
  edges: {
    source: string,
    target: string,
    label: number
  }[]
};
