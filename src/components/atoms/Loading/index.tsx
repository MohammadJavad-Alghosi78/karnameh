// Design System
import { Box, Typography } from "@mui/material";
// Strings
import { words } from "@/strings";

const Loading = () => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <Typography variant="h1">{words.loading}</Typography>
  </Box>
);

export default Loading;
