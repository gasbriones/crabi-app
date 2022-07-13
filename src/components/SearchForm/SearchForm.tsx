import React, { Dispatch, SetStateAction } from 'react';
import { Button, Input } from '../FormComponents';
import './style.scss';

type Props = {
  value: string;
  reset: () => void;
};

export const SearchForm: React.FC<Props> = function ({
  value,
  reset,
}) {
  return (
    <div className="search-form">
      <div className="search-form__input">
        <span>{`N € { ${value} }`}</span>
      </div>
      <div className="search-form__button">
        <Button label="Reset route" type="button" action={reset} />
      </div>
    </div>
  );
};
