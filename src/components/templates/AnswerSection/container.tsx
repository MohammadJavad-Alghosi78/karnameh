// node_modules
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
// Components
import AnswerQuestion from ".";
// Services
import { QuestionServices } from "@/services";
// Types
import { IQuestion } from "@/services/questions/types";
// Strings
import { words } from "@/strings";

interface IAnswerSection {
  questionId: string | number;
}

const AnswerSectionContainer = (props: IAnswerSection) => {
  const queryClient = useQueryClient();

  const getQuestion = async () => {
    const { data } = await QuestionServices.getQuestion(props.questionId);
    return data;
  };

  const mutation = useMutation({
    mutationFn: (q: IQuestion) => {
      return QuestionServices.createAnswer(q);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["question", props.questionId],
      });
    },
  });
  const methods = useForm();

  const onSubmit = async (data: FieldValues) => {
    const questionData = await getQuestion();
    const currentDate = new Date();

    const preparedAnswer = {
      answer: data.answer,
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
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <AnswerQuestion onSubmit={onSubmit} />;
    </FormProvider>
  );
};

export default AnswerSectionContainer;
