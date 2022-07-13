import React, { useEffect, Dispatch, SetStateAction } from 'react';
import G6 from '@antv/g6';
import './style.scss';

const defaultEdge = {
  style: {
    stroke: '#333',
  },
  labelCfg: {
    refY: 8,
    style: {
      fill: '#333',
    },
  },
};

const defaultNode = {
  size: 25,
  style: {
    fill: '#004ec9',
    stroke: '#fff',
  },
  labelCfg: {
    refY: 8,
    style: {
      fill: '#fff',
    },
  },
};

type Props = {
  data?: any;
  setSelectedNode:Dispatch<SetStateAction<string>>
};

export const Graphic: React.FC<Props> = function ({
  data,
  setSelectedNode,
}) {
  useEffect(() => {
    const container = document.querySelector('#canvas');
    if (container) {
      container.innerHTML = '';
      const parent = container.closest('div');
      const size = parent?.clientWidth || 0;

      const graph = new G6.Graph({
        container: 'canvas',
        width: size,
        height: size,
        fitView: true,
        layout: {
          type: 'fruchterman',
          gravity: 5,
          speed: 5,
        },
        animate: true,
        defaultNode,
        defaultEdge,
      });

      if (data) {
        graph.data(data);
        graph.render();
        graph.on('node:click', (evt) => {
          const { item } = evt;
          const id = item?._cfg?.id;
          if (id) {
            setSelectedNode(id);
          }
        });
      }
    }
  }, [data]);

  return (
    <div className="canvas" id="canvas" />
  );
};
