// node_modules
import { AxiosResponse } from "axios";
// Design system
import { Box } from "@mui/material";
// Components
import { EmptyState, QuestionCard } from "@/components";
// Types
import { IQuestion } from "@/services/questions/types";

interface IQuestionSectionProps {
  hasData: boolean;
  questionsResponse?: AxiosResponse<Array<IQuestion>>;
}

const QuestionsSection = (props: IQuestionSectionProps) => {
  const { hasData, questionsResponse } = props;

  return (
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
  );
};

export default QuestionsSection;
