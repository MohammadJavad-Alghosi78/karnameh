"use client";
import { AnswerCard, QuestionCard } from "@/components";
import { Container, Header } from "@/components/shared";
import { QuestionServices } from "@/services";
import { IAnswer } from "@/services/questions/types";
import { words } from "@/strings";
import { Box, Typography, useTheme } from "@mui/material";
import { QueryKey, useQuery } from "react-query";

interface IQuestionProps {
  params: {
    id: string | number;
  };
}

const Question = (props: IQuestionProps) => {
  const theme = useTheme();
  const questionId = props.params.id;

  const getQuestion = async () => {
    const { data } = await QuestionServices.getQuestion(questionId);
    return data;
  };

  const { data, isLoading } = useQuery(["question", questionId], getQuestion);

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
          )}
        </Container>
      )}
    </>
  );
};

export default Question;
