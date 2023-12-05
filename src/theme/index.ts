// node_modules
import { createTheme } from "@mui/material/styles";
// Theme elements
import { typography } from "./typography";
import { palette } from "./palette";
import { Shadows } from "@mui/material/styles/shadows";

declare module "@mui/material/styles" {
  interface Palette {
    colors: Palette["primary"];
  }

  interface PaletteColor {
    naturalsBlack: string;
    naturalsWhite: string;
    karnamehBase: string;
    grayLight: string;
    grayLightest: string;
    grayDarker: string;
    grayDark: string;
    grayDefault: string;
    secondaryLightest: string;
    annotationsError: string;
    annotationsSuccess: string;
  }

  interface PaletteOptions {
    colors?: {
      naturalsBlack: string;
      naturalsWhite: string;
      karnamehBase: string;
      grayLight: string;
      grayLightest: string;
      grayDarker: string;
      grayDark: string;
      grayDefault: string;
      secondaryLightest: string;
      annotationsError: string;
      annotationsSuccess: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

const theme = createTheme({
  palette,
  typography,
  shadows: [
    "none",
    "0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
    ...Array(23).fill("none"),
  ] as Shadows,
});

export default theme;
