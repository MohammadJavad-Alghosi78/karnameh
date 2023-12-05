"use client";
// Components
import { QuestionDetailsContainer } from "@/components";
interface IQuestionProps {
  params: {
    id: string | number;
  };
}
const Question = (props: IQuestionProps) => {
  const questionId = props.params.id;
  return <QuestionDetailsContainer questionId={questionId} />;
};

export default Question;
