// Design system
import { Box, Typography } from "@mui/material";
// Strings
import { words } from "@/strings";

const EmptyState = () => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <Typography variant="h1">{words.noData}</Typography>
  </Box>
);

export default EmptyState;
