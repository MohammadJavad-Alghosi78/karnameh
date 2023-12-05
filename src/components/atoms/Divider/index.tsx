// Design system
import { Divider, useTheme } from "@mui/material";

const DividerCp = () => {
  const theme = useTheme();

  return (
    <Divider
      orientation="vertical"
      variant="middle"
      sx={{
        width: "1px",
        height: "24px",
        background: `${theme.palette.colors.naturalsWhite}10`,
      }}
    />
  );
};

export default DividerCp;
