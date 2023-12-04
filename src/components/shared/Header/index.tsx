"use client";
// Design system
import {
  Box,
  Typography,
  Button,
  Avatar,
  useTheme,
  Modal,
  TextField,
} from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
// Strings
import { words } from "@/strings";
// Styles
import { StyledBox } from "./styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { QuestionServices } from "@/services";
import { IQuestion } from "@/services/questions/types";

interface IHeaderProps {
  title: string;
}

const Header = (props: IHeaderProps) => {
  const theme = useTheme();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (q: IQuestion) => {
      return QuestionServices.createQuestion(q);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
  });

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const handleOpenAddQuestionModal = () => {
    setIsAddModalOpen(true);
  };

  const onSubmit = (data: any) => {
    const currentDate = new Date();
    const question = {
      id: currentDate.getTime(),
      ...data,
      image: "",
      date: new Intl.DateTimeFormat("fa-IR").format(currentDate),
      time: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
      answers: [],
    };

    queryClient.invalidateQueries();
    mutation.mutate(question);
    setIsAddModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    reset();
  };

  return (
    <>
      <Modal
        open={isAddModalOpen}
        onClose={handleCloseModal}
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
            <Box
              onClick={() => setIsAddModalOpen(false)}
              style={{ cursor: "pointer" }}
            >
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
              <TextField {...register("title")} fullWidth autoComplete="off" />
            </Box>
            <Box display="flex" gap="10px" flexDirection="column">
              <Typography variant="h6" color={theme.palette.colors.grayDarker}>
                {words.questionText}
              </Typography>

              <textarea {...register("description")} />
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              gap="16px"
              marginTop="24px"
            >
              <Button variant="text" color="success" onClick={handleCloseModal}>
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
      <StyledBox>
        <Box>
          <Typography variant="h1">{props.title}</Typography>
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
            onClick={handleOpenAddQuestionModal}
          >
            {words.newQuestion}
          </Button>
          <Box display="flex" alignItems="center" gap="12px">
            <Avatar sx={{ width: 44, height: 44 }} alt="Remy Sharp" src="" />
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
