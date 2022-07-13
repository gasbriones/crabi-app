import React from 'react';
import './style.scss';

type Props = {
  children: JSX.Element,
  title?: string
};

export const FieldSet: React.FC<Props> = function ({
  children,
  title,
}) {
  return (
    <fieldset className="fieldset">
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};
