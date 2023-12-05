import { ChangeEvent, HTMLAttributes } from "react";
import { TextArea, Wrapper } from "./styled";
import { Typography, useTheme } from "@mui/material";

interface ITextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  rows?: number;
  cols?: number;
  errorMessage?: string;
}

const TextAreaCp = (props: ITextAreaProps) => {
  const theme = useTheme();
  const { value, onChange, rows, cols, errorMessage, ...rest } = props;
  return (
    <Wrapper>
      <TextArea
        value={value}
        onChange={onChange}
        name={rest.name}
        id={rest.id}
        rows={rows ?? 5}
        cols={cols ?? 5}
        placeholder={rest.placeholder}
      />
      {!!errorMessage && (
        <Typography
          marginRight="20px"
          variant="body2"
          color={theme.palette.colors.annotationsError}
        >
          {errorMessage}
        </Typography>
      )}
    </Wrapper>
  );
};

export default TextAreaCp;
