// node_modules
import { createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";
// Theme elements
import { typography } from "./typography";
import { palette } from "./palette";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Palette {
    colors: Palette["primary"];
  }

  interface PaletteColor {
    naturalsBlack: CSSProperties["color"];
    naturalsWhite: CSSProperties["color"];
    karnamehBase: CSSProperties["color"];
    grayLight: CSSProperties["color"];
    grayLightest: CSSProperties["color"];
    grayDarker: CSSProperties["color"];
    grayDark: CSSProperties["color"];
    grayDefault: CSSProperties["color"];
    secondaryLightest: CSSProperties["color"];
    annotationsError: CSSProperties["color"];
    annotationsSuccess: CSSProperties["color"];
  }

  interface PaletteOptions {
    colors?: {
      naturalsBlack: CSSProperties["color"];
      naturalsWhite: CSSProperties["color"];
      karnamehBase: CSSProperties["color"];
      grayLight: CSSProperties["color"];
      grayLightest: CSSProperties["color"];
      grayDarker: CSSProperties["color"];
      grayDark: CSSProperties["color"];
      grayDefault: CSSProperties["color"];
      secondaryLightest: CSSProperties["color"];
      annotationsError: CSSProperties["color"];
      annotationsSuccess: CSSProperties["color"];
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
