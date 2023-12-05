// Design system
import { Box, Typography, useTheme } from "@mui/material";
// Components
import {
  Container,
  AnswerCard,
  Header,
  QuestionCard,
  AnswerSection,
} from "@/components";
// Types
import { IAnswer, IQuestion } from "@/services/questions/types";
// Words
import { words } from "@/strings";

interface IQuestionDetails {
  isLoading: boolean;
  questionDetailsData?: IQuestion;
  questionId: string | number;
}

const QuestionDetails = (props: IQuestionDetails) => {
  const theme = useTheme();
  const { isLoading, questionDetailsData: data, questionId } = props;

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
          {data && !!data!.answers.length && (
            <Box marginTop="24px">
              <Typography
                marginBottom="16px"
                variant="h1"
                color={theme.palette.colors.naturalsBlack}
              >
                {words.answers}
              </Typography>
              <Box display="flex" gap="20px" flexDirection="column">
                {data.answers.map((item: IAnswer) => (
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
          <AnswerSection questionId={questionId} />
        </Container>
      )}
    </>
  );
};

export default QuestionDetails;
