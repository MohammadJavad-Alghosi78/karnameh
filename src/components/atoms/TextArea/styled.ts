// Design system
import { styled, Box } from "@mui/material";

export const TextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  padding: "12px 16px",
  borderRadius: "6px",
  border: `1px solid ${theme.palette.colors.grayLight}`,
  backgroundColor: theme.palette.colors.naturalsWhite,
  resize: "none",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  color: theme.palette.colors.naturalsBlack,
  outline: "none",
  "&::placeholder": {
    color: theme.palette.colors.grayDefault,
  },
}));
