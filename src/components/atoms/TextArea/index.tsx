// node_modules
import { ChangeEvent, HTMLAttributes } from "react";
// Design system
import { Box, Typography, useTheme } from "@mui/material";
// Styles
import { TextArea } from "./styled";

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
    <Box display="flex" flexDirection="column" gap="8px">
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
    </Box>
  );
};

export default TextAreaCp;
