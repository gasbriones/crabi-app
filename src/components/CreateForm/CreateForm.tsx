import React, { Dispatch, SetStateAction } from 'react';
import { Input, Button } from '../FormComponents';
import './style.scss';

type Props = {
  setOrigin: Dispatch<SetStateAction<string | number>>,
  setDestiny: Dispatch<SetStateAction<string | number>>,
  setCost: Dispatch<SetStateAction<string | number>>,
  saveData: (e: any) => void
};

export const CreateForm: React.FC<Props> = function ({
  setOrigin,
  setDestiny,
  setCost,
  saveData,
}) {
  return (
    <form className="create-form" onSubmit={saveData}>
      <div className="create-form__input">
        <Input placeholder="Origin:" action={setOrigin} />
        <Input placeholder="Destiny:" action={setDestiny} />
        <Input placeholder="Cost:" action={setCost} />
      </div>
      <div className="create-form__button">
        <Button label="Save Node" type="submit" />
      </div>
    </form>
  );
};
