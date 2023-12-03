import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";

declare module "@mui/material/styles" {
  interface Palette {
    colors: Palette["primary"];
  }

  interface PaletteOptions {
    colors?: {
      naturalsBlack: string;
      naturalsWhite: string;
      karnamehBase: string;
      grayDarker: string;
      grayDark: string;
      grayDefault: string;
      secondaryLightest: string;
      annotationsError: string;
      annotationsSuccess: string;
    };
  }

  //   interface PaletteColor {
  //     naturalsBlack: string;
  //     naturalsWhite: string;
  //     karnamehBase: string;
  //     grayDarker: string;
  //     grayDark: string;
  //     grayDefault: string;
  //     secondaryLightest: string;
  //     annotationsError: string;
  //     annotationsSuccess: string;
  //   }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    input: true;
    body3: true;
    smallButton: true;
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
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
