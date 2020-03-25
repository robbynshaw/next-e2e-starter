import { FunctionComponent, ReactNode, ComponentType } from "react";

export interface IFormControlLabelProps {
  children: ReactNode;
  label: string;
}

const FormControlLabel: FunctionComponent<IFormControlLabelProps> = (props: IFormControlLabelProps) => {
  const { children, label } = props;

  return (
    <label>
      {label}
      {children}
    </label>
  )
}

export default FormControlLabel;