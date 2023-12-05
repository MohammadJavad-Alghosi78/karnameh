// Design system
import { Box, Typography, Button, Avatar, useTheme } from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// Components
import { AddQuestionModal } from "@/components";
// Strings
import { words } from "@/strings";
// Styles
import { StyledBox } from "./styled";

interface IHeaderProps {
  title: string;
  isAddModalOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

const Header = (props: IHeaderProps) => {
  const { isAddModalOpen, onCloseModal, onOpenModal, title } = props;

  const theme = useTheme();

  return (
    <>
      <AddQuestionModal isOpen={isAddModalOpen} onCloseModal={onCloseModal} />
      <StyledBox>
        <Box>
          <Typography variant="h1">{title}</Typography>
        </Box>
        <Box display="flex" gap="40px">
          <Button
            sx={{
              padding: "8px",
              width: "126px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            variant="contained"
            color="success"
            startIcon={<AddTwoToneIcon style={{ marginInline: "0" }} />}
            onClick={onOpenModal}
          >
            {words.newQuestion}
          </Button>
          <Box display="flex" alignItems="center" gap="12px">
            <Avatar sx={{ width: 44, height: 44 }} alt="Ali kia" src="" />
            <Typography variant="h4" color={theme.palette.colors.grayDarker}>
              {words.fakeName}
            </Typography>
            <ArrowDropDownIcon />
          </Box>
        </Box>
      </StyledBox>
    </>
  );
};

export default Header;
