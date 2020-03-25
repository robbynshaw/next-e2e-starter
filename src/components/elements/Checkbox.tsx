import React, { ReactNode } from "react";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 10px;
  padding: 5px;
`;

const Input = styled.input`
  display: inline-block;
  padding-right: 10px;
  margin-right: 20px;
  margin-top: 0px;
  vertical-align: middle;
`;

const Label = styled.label`
  display: block;
  vertical-align: middle;

  & blockquote {
    margin-top: 5px;
    margin-bottom: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
  }
`;

export interface ICheckboxProps {
  children: ReactNode;
  value: string;
  onChange?: (value: string, checked: boolean) => void;
}

const Checkbox = (props: ICheckboxProps) => {
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
    <FormControl>
      <Label>
        <Input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        {children}
      </Label>
    </FormControl>
  );
};

export default Checkbox;
