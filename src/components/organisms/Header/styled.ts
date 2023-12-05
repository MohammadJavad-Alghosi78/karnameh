// node_modules
import { styled, Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "68px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.colors.naturalsWhite,
  padding: "16px 56px",

  "& .MuiButtonBase-root": {
    color: theme.palette.colors.naturalsWhite,
  },

  "& .MuiButton-startIcon": {
    marginInline: "0",
  },
}));
