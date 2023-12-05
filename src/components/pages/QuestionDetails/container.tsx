// node_modules
import { useQuery } from "react-query";
// Components
import QuestionDetails from ".";
// Services
import { QuestionServices } from "@/services";

interface IQuestionProps {
  questionId: string | number;
}

const QuestionDetailsContainer = ({ questionId }: IQuestionProps) => {
  const getQuestion = async () => {
    const { data } = await QuestionServices.getQuestion(questionId);
    return data;
  };

  const { data, isLoading } = useQuery(["question", questionId], getQuestion);

  return (
    <QuestionDetails
      questionId={questionId}
      isLoading={isLoading}
      questionDetailsData={data}
    />
  );
};

export default QuestionDetailsContainer;
