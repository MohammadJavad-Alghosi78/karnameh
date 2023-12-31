// node_modules
import { useMutation, useQueryClient } from "react-query";
// Components
import AnswerCard from ".";
// Services
import { QuestionServices } from "@/services";
// Types
import { IQuestion } from "@/services/questions/types";

interface IAnswerCardCotainerProps {
  name: string;
  image: string;
  answer: string;
  time: string;
  date: string;
  answerId: string | number;
  relatedQuestion: IQuestion;
  likes: number;
  disLikes: number;
}

const AnswerCardContainer = (props: IAnswerCardCotainerProps) => {
  const {
    name,
    image,
    answer,
    time,
    date,
    answerId,
    relatedQuestion,
    likes,
    disLikes,
  } = props;
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (q: IQuestion) => {
      return QuestionServices.updateQuestionData(q);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const handleLike = () => {
    const clonedQuestion = { ...relatedQuestion };
    const targetAnswer = clonedQuestion.answers.find(
      (item) => item.answerId === answerId
    );
    const targetAnswerIndex = clonedQuestion?.answers.findIndex(
      (item) => item.answerId === answerId
    ) as number;
    const updatedAnswer = { ...targetAnswer, likes: targetAnswer!.likes + 1 };
    // @ts-ignore
    clonedQuestion.answers[targetAnswerIndex] = updatedAnswer;
    mutation.mutate(clonedQuestion);
  };

  const handleDisLike = () => {
    const clonedQuestion = { ...relatedQuestion };
    const targetAnswer = clonedQuestion?.answers.find(
      (item) => item.answerId === answerId
    );
    const targetAnswerIndex = clonedQuestion?.answers.findIndex(
      (item) => item.answerId === answerId
    ) as number;
    const updatedAnswer = {
      ...targetAnswer,
      disLikes: targetAnswer!.disLikes + 1,
    };
    // @ts-ignore
    clonedQuestion.answers[targetAnswerIndex] = updatedAnswer;
    mutation.mutate(clonedQuestion);
  };

  return (
    <AnswerCard
      answer={answer}
      date={date}
      disLikes={disLikes}
      image={image}
      likes={likes}
      name={name}
      onDisLike={handleDisLike}
      onLike={handleLike}
      time={time}
    />
  );
};

export default AnswerCardContainer;
