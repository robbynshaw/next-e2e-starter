import { FunctionComponent } from "react";

export interface ICheckboxProps {
  checked: boolean;
  onChange: () => void;
  value: string;
}

const Checkbox: FunctionComponent<ICheckboxProps> = (props: ICheckboxProps) => {
  const { checked, onChange, value } = props;

  return <input type="checkbox" checked={checked} value={value} />
}

export default Checkbox;