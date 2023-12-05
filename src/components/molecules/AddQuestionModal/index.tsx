// node_modules
import { Controller, FieldValues, useFormContext } from "react-hook-form";
// Design system
import { Box, Typography, Button, useTheme, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// Components
import { TextArea, TextField } from "@/components";
// Strings
import { words } from "@/strings";

interface IAddQuestionModal {
  isOpen: boolean;
  onCloseModal: () => void;
  onSubmit: (d: FieldValues) => void;
}

const AddQuestionModal = (props: IAddQuestionModal) => {
  const { isOpen, onCloseModal, onSubmit } = props;
  const theme = useTheme();

  const { control, handleSubmit } = useFormContext();

  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "50%",
          position: "absolute",
          left: "25%",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor={theme.palette.colors.naturalsWhite}
          width="1"
          padding="12px 20px"
        >
          <Typography variant="h1">{words.createNewQuestion}</Typography>
          <Box onClick={onCloseModal} style={{ cursor: "pointer" }}>
            <CloseIcon />
          </Box>
        </Box>
        <Box
          padding="20px 20px 24px"
          width="1"
          bgcolor={theme.palette.colors.grayLightest}
        >
          <Box
            display="flex"
            gap="10px"
            flexDirection="column"
            marginBottom="14px"
          >
            <Typography variant="h6" color={theme.palette.colors.grayDarker}>
              {words.subject}
            </Typography>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  name="title"
                  placeholder={words.createQuestionTitlePlacholder}
                />
              )}
            />
          </Box>
          <Box display="flex" gap="10px" flexDirection="column">
            <Typography variant="h6" color={theme.palette.colors.grayDarker}>
              {words.questionText}
            </Typography>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  name="description"
                  placeholder={words.createQuestionDesciptionPlaceholder}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: words.thisFieldIsRequired,
                },
              }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            gap="16px"
            marginTop="24px"
          >
            <Button variant="text" color="success" onClick={onCloseModal}>
              {words.cancel}
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleSubmit(onSubmit)}
            >
              {words.createQuestion}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddQuestionModal;
