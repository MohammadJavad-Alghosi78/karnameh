// node_modules
import { ChangeEvent, HTMLAttributes } from "react";
// Styles
import { StyledTextField } from "./styled";

interface ITextFieldProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const TextFieldCp = (props: ITextFieldProps) => {
  const { value, onChange, name, ...rest } = props;

  return (
    <StyledTextField
      value={value}
      onChange={onChange}
      name={name}
      placeholder={rest.placeholder}
    />
  );
};

export default TextFieldCp;
