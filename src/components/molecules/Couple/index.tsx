import { Box, Typography, useTheme } from "@mui/material";

interface ICoupleProps {
  keyWord: string;
  value: string;
}

const Couple = (props: ICoupleProps) => {
  const theme = useTheme();
  const { keyWord, value } = props;

  return (
    <Box display="flex" alignItems="center" gap="4px">
      <Typography variant="body1" color={theme.palette.colors.grayDark}>
        {keyWord}:
      </Typography>
      <Typography variant="h6" color={theme.palette.colors.naturalsBlack}>
        {value}
      </Typography>
    </Box>
  );
};

export default Couple;
