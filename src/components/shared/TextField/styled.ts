import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.colors.naturalsWhite,
  outline: "none",

  input: {
    border: `1px solid ${theme.palette.colors.grayLight}`,
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    color: theme.palette.colors.naturalsBlack,
    "&::placeholder": {
      color: theme.palette.colors.grayDarker,
    },
  },

  fieldset: {
    border: "none",
  },
}));
