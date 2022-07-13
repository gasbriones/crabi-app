import React, { Dispatch, SetStateAction } from 'react';
import './style.scss';

type Props = {
  placeholder: string;
  action?: Dispatch<SetStateAction<any>>
  value?: string
};

export const Input: React.FC<Props> = function ({
  placeholder,
  action,
  value,
}) {
  return (
    <input value={value} type="text" onChange={((event) => action && action(event.target.value))} placeholder={placeholder} className="input" />
  );
};
