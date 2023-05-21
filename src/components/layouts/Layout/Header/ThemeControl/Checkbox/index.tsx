import React, { KeyboardEvent, useRef } from 'react';

import { Container, LabelSwitch, Input, Slider } from './styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  title?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  title,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPressed = (event: KeyboardEvent<HTMLLabelElement>) => {
    if (inputRef.current !== null && event.code === 'Enter') {
      inputRef.current.click();
    }
  };

  return (
    <Container>
      <LabelSwitch htmlFor={id} tabIndex={0} onKeyPress={handleKeyPressed}>
        <Input
          ref={inputRef}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <Slider title={title} />
      </LabelSwitch>
    </Container>
  );
};

export default Checkbox;
