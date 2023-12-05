// node_modules
import { ChangeEvent, HTMLAttributes } from "react";
// Components
import { Box } from "@mui/material";
// Styles
import { StyledTextField } from "./styled";

interface ITextFieldProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const TextFieldCp = (props: ITextFieldProps) => {
  const { value, onChange, name, placeholder } = props;

  return (
    <Box display="flex" flexDirection="column" gap="8px">
      <StyledTextField
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default TextFieldCp;
