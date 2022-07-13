import React, { useCallback, useEffect, useState } from 'react';
import { BreadCrumb, Cost, CreateForm, FieldSet, Graphic, MathRepresentation, SearchForm } from '../../components';
import { useGraph } from '../../hooks/useGraph';
import './style.scss';

function Home(): JSX.Element {
  const [origin, setOrigin] = useState<string | number>('');
  const [destiny, setDestiny] = useState<string | number>('');
  const [cost, setCost] = useState<string | number>(0);
  const [selectedNode, setSelectedNode] = useState<string>('');

  const {
    drawData,
    setNodes,
    setRoute,
    nodes,
    costs,
    route,
    getNode,
    visitedNodes,
    firstNodeSelected,
    currentNodeSelected,
  } = useGraph();

  const saveData = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.target.reset();
    if (origin && destiny && cost) {
      setNodes(((prevState: any) => [...prevState, [origin, destiny, cost]]));
    }
  }, [origin, destiny, cost]);

  const resetRoute = useCallback(() => {
    setRoute([]);
  }, []);

  useEffect(() => {
    if (selectedNode) {
      setRoute(((prevState) => {
        const prevNode = getNode(prevState[prevState.length - 1]);
        const targetNode = getNode(selectedNode);
        if (prevState.length === 0 || prevNode.isNeighbor(targetNode)) {
          return [...prevState, selectedNode];
        }
        return [...prevState];
      }));
    }
  }, [selectedNode]);

  return (
    <div className="home">
      <div className="home__representation">
        <MathRepresentation nodes={nodes} />
      </div>
      <div className="home__graph">
        <div className="home__graph-image">
          <FieldSet title="Graph">
            <Graphic data={drawData} setSelectedNode={setSelectedNode} />
          </FieldSet>
        </div>
        <div className="home__graph-routes">
          <FieldSet title="Results">
            <>
              <BreadCrumb title="First node selected: " data={firstNodeSelected} />
              <BreadCrumb title="Current node selected: " data={currentNodeSelected} />
              <BreadCrumb title="Visited nodes: " data={visitedNodes} />
              <Cost title="Total cost:" cost={costs} />
            </>
          </FieldSet>
        </div>
      </div>
      <div className="home__actions">
        <div className="home__actions-forms">
          <FieldSet title="Actions">
            <div className="home__actions-forms__actions">
              <div className="home__actions-forms__actions-create">
                <CreateForm
                  setOrigin={setOrigin}
                  setDestiny={setDestiny}
                  setCost={setCost}
                  saveData={saveData}
                />
              </div>
              <div className="home__actions-forms__actions-search">
                <SearchForm
                  value={route.toString()}
                  reset={resetRoute}
                />
              </div>
            </div>
          </FieldSet>
        </div>
      </div>
    </div>
  );
}

export default Home;
