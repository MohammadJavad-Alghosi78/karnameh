"use client";
import { AnswerCard, QuestionCard } from "@/components";
import { Container, Header } from "@/components";
import { TextArea } from "@/components";
import { QuestionServices } from "@/services";
import { IAnswer, IQuestion } from "@/services/questions/types";
import { words } from "@/strings";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface IQuestionProps {
  params: {
    id: string | number;
  };
}

const Question = (props: IQuestionProps) => {
  const theme = useTheme();
  const questionId = props.params.id;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      answer: "",
    },
  });

  const queryClient = useQueryClient();

  const getQuestion = async () => {
    const { data } = await QuestionServices.getQuestion(questionId);
    return data;
  };

  const { data, isLoading } = useQuery(["question", questionId], getQuestion);
  const mutation = useMutation({
    mutationFn: (q: IQuestion) => {
      return QuestionServices.createAnswer(q);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["question", questionId] });
    },
  });

  const onSubmit = async (data: any) => {
    const questionData = await getQuestion();
    const currentDate = new Date();
    const preparedAnswer = {
      ...data,
      answerId: currentDate.getTime(),
      date: new Intl.DateTimeFormat("fa-IR").format(currentDate),
      time: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
      name: words.username,
      image: "",
      likes: 0,
      disLikes: 0,
    };
    questionData.answers.push(preparedAnswer);
    mutation.mutate(questionData);
    reset();
  };

  return (
    <>
      <Header title={words.questionDetails} />
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1">{words.loading}</Typography>
        </Box>
      ) : (
        <Container>
          <QuestionCard
            title={data!.title}
            image={data!.image}
            description={data!.description}
            date={data!.date}
            numOfAnswers={data!.answers.length}
            questionId={questionId}
            time={data!.time}
            showButton={false}
          />
          {!!data!.answers.length && (
            <Box marginTop="24px">
              <Typography
                marginBottom="16px"
                variant="h1"
                color={theme.palette.colors.naturalsBlack}
              >
                {words.answers}
              </Typography>
              <Box display="flex" gap="20px" flexDirection="column">
                {data!.answers.map((item: IAnswer) => (
                  <AnswerCard
                    name={item.name}
                    image={item.image}
                    answer={item.answer}
                    date={item.date}
                    time={item.time}
                    answerId={item.answerId}
                    likes={item.likes}
                    disLikes={item.disLikes}
                    relatedQuestion={data}
                  />
                ))}
              </Box>
            </Box>
          )}
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
              rules={{
                required: {
                  value: true,
                  message: words.thisFieldIsRequired,
                },
              }}
              render={({ field }) => (
                <TextArea
                  {...field}
                  errorMessage={errors.answer?.message}
                  placeholder={words.answerText}
                />
              )}
            ></Controller>
            <Button
              variant="contained"
              color="success"
              onClick={handleSubmit(onSubmit)}
              sx={{ marginTop: "24px", width: "200px" }}
            >
              {words.sendAnswer}
            </Button>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Question;
