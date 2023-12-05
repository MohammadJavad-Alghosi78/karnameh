// node_modules
import { AxiosResponse } from "axios";
// Design system
import { Box } from "@mui/material";
// Components
import { EmptyState, Loading, QuestionCard } from "@/components";
import { Container, Header } from "@/components";
// Types
import { IQuestion } from "@/services/questions/types";
// Strings
import { words } from "@/strings";

interface IHomeProps {
  isLoading: boolean;
  questionsResponse?: AxiosResponse<Array<IQuestion>>;
}

export const Home = ({ isLoading, questionsResponse }: IHomeProps) => {
  const hasData = !!questionsResponse?.data.length;
  return (
    <>
      <Header title={words.questionsList} />
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <Box display="flex" flexDirection="column" gap="20px">
            {hasData ? (
              questionsResponse?.data.map((item) => (
                <QuestionCard
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  date={item.date}
                  numOfAnswers={item.answers.length}
                  questionId={item.id}
                  time={item.time}
                />
              ))
            ) : (
              <EmptyState />
            )}
          </Box>
        )}
      </Container>
    </>
  );
};
