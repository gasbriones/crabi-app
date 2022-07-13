import React from 'react';
import './style.scss';

type Props = {
  title: string;
  cost: number
};

export const Cost: React.FC<Props> = function ({
  title,
  cost,
}) {
  return (
    <div className="cost">
      <span>{title}</span>
      <span className="cost__total">
        {cost}
      </span>
    </div>
  );
};

export default Cost;
