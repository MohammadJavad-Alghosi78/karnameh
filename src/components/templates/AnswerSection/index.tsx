// node_modules
import { Controller, FieldValues, useFormContext } from "react-hook-form";
// Design system
import { Box, Button, Typography, useTheme } from "@mui/material";
// Components
import { TextArea } from "@/components";
// Constants
import { Rules } from "@/constants";
// Strings
import { words } from "@/strings";

interface IAnswerQuestion {
  onSubmit: (d: FieldValues) => Promise<void>;
}

const AnswerQuestion = (props: IAnswerQuestion) => {
  const { onSubmit } = props;
  const theme = useTheme();

  const { control, formState, handleSubmit } = useFormContext();

  return (
    <Box marginTop="24px" width="1">
      <Typography
        marginBottom="16px"
        variant="h1"
        color={theme.palette.colors.naturalsBlack}
      >
        {words.submitYourAnswer}
      </Typography>
      <Typography
        marginBottom="16px"
        marginRight="4px"
        variant="h6"
        color={theme.palette.colors.naturalsBlack}
      >
        {words.writeYourAnswer}
      </Typography>
      <Controller
        name="answer"
        control={control}
        rules={Rules}
        render={({ field }) => (
          <TextArea
            {...field}
            errorMessage={formState.errors.answer?.message as string}
            placeholder={words.answerText}
          />
        )}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleSubmit(onSubmit)}
        sx={{ marginTop: "24px", width: "200px" }}
      >
        {words.sendAnswer}
      </Button>
    </Box>
  );
};

export default AnswerQuestion;
