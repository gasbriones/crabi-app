import React from 'react';
import './style.scss';

type Props = {
  title: string;
  data: any[]
};

export const BreadCrumb: React.FC<Props> = function ({
  title,
  data,
}) {
  return (
    <div className="bread-crumb">
      <span>{title}</span>
      {data ? (
        <span className="bread-crumb__nodes">
          {data.map((node, index) => (data.length - 1 > index ? `${node} > ` : node))}
        </span>
      ) : ''}
    </div>
  );
};
