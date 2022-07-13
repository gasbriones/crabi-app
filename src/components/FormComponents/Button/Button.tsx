import React from 'react';
import './style.scss';

type Props = {
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  action?: () => void
};

export const Button: React.FC<Props> = function ({
  label,
  type,
  action,
}) {
  return (
    <button className="button" type={type} onClick={() => action && action()}>
      <span>{label}</span>
    </button>
  );
};
