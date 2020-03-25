import { FunctionComponent, ReactNode } from "react";

export interface IFormGroupProps {
  children: ReactNode;
  row: boolean;
}

const FormGroup: FunctionComponent<IFormGroupProps> = (props: IFormGroupProps) => {
  const { children } = props;

  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

export default FormGroup;