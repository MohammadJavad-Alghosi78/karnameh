// node_modules
import { styled } from "@mui/material";

export const StyledMain = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.colors.secondaryLightest,
  padding: "32px 56px",
  minHeight: "calc(100vh - 68px)",
}));
