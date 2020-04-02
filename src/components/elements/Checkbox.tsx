import React, { ReactNode, FunctionComponent } from 'react';
import { Label, Checkbox as RawCheckbox } from '@rebass/forms';

export interface CheckboxProps {
  children: ReactNode;
  value: string;
  onChange?: (value: string, checked: boolean) => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = (props: CheckboxProps) => {
  const { children, value, onChange } = props;

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    const newVal = !checked;
    setChecked(newVal);
    if (onChange) {
      onChange(value, newVal);
    }
  };

  return (
    <>
      <Label>
        <RawCheckbox id={value} name={value} checked={checked} onChange={handleChange} />
        {children}
      </Label>
    </>
  );
};

export default Checkbox;
