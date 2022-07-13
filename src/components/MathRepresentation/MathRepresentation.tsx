import React, { useMemo } from 'react';
import './style.scss';

type Props = {
  nodes: any[]
};

export const MathRepresentation: React.FC<Props> = function ({
  nodes,
}) {
  const getData = useMemo(() => nodes && nodes.map((row: any) => (
    `{ ${row.toString()} }`
  )), [nodes]);

  return (
    <div className="search-form">
      <div className="search-form__input">
        <span>{`R1 [${getData}]`}</span>
      </div>
    </div>
  );
};
