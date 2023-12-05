// node_modules
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
// Components
import AddQuestionModal from ".";
// Services
import { QuestionServices } from "@/services";
// Types
import { IQuestion } from "@/services/questions/types";

interface IAddQuestionModal {
  isOpen: boolean;
  onCloseModal: () => void;
}

const AddQuestionModalContainer = (props: IAddQuestionModal) => {
  const { isOpen, onCloseModal } = props;

  const methods = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (q: IQuestion) => {
      return QuestionServices.createQuestion(q);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
  });

  const onSubmit = (data: FieldValues) => {
    const { title, description } = data;

    const currentDate = new Date();
    const question = {
      id: currentDate.getTime(),
      title,
      description,
      numOfAnswers: 0,
      image: "",
      date: new Intl.DateTimeFormat("fa-IR").format(currentDate),
      time: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
      answers: [],
    };

    queryClient.invalidateQueries();
    mutation.mutate(question);
    methods.reset();
    onCloseModal();
  };

  return (
    <FormProvider {...methods}>
      <AddQuestionModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};

export default AddQuestionModalContainer;
