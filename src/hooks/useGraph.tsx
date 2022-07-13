import React, {
  useCallback,
  useEffect, useMemo, useState,
} from 'react';
import MyGraph from '../Class/MyGraph';
import { DrawDataType } from '../types/types';

const defaultRoutes = [['a', 'c', '11'], ['b', 'c', '9'], ['a', 'b', '13'], ['c', 'd', '20'], ['e', 'c', '4'], ['c', 'd', '20'], ['d', 'e', '15']];

export function useGraph() {
  const [nodes, setNodes] = useState<string[][]>([]);
  const [costs, setCosts] = useState<number>(0);
  const [route, setRoute] = useState<string[]>([]);
  const [drawData, setDrawData] = useState<DrawDataType | undefined>(undefined);
  const [partialCost, setPartialCost] = useState<any[][]>([]);

  const graphInstance = useMemo(() => new MyGraph(nodes), [nodes]);

  const getNode = useCallback((label: string) => graphInstance.getNode(label), [graphInstance]);

  const visitedNodes = useMemo(() => partialCost.length && partialCost[0][0], [partialCost]);

  const firstNodeSelected = useMemo(() => visitedNodes.length && [visitedNodes[0]], [visitedNodes]);

  const currentNodeSelected = useMemo(() => visitedNodes.length && [visitedNodes[visitedNodes.length - 1]], [visitedNodes]);

  const init = useCallback(() => {
    const dData = graphInstance.draw();
    // @ts-ignore
    setDrawData(dData);
  }, [graphInstance]);

  useEffect(() => {
    if (nodes.length) {
      init();
    }
  }, [nodes]);

  useEffect(() => {
    if (route) {
      const totalCost = graphInstance.calculateCost(route);
      setCosts(totalCost);
    }
  }, [route, graphInstance]);

  useEffect(() => {
    setPartialCost([[route, costs]]);
  }, [route, costs]);

  return {
    drawData,
    nodes,
    setNodes,
    costs,
    route,
    setRoute,
    getNode,
    visitedNodes,
    firstNodeSelected,
    currentNodeSelected,
  };
}
