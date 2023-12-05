// node_modules
import { useQuery } from "react-query";
// Components
import { Home } from ".";
// Services
import { QuestionServices } from "@/services";

// Container/Presentation Design pattern
const HomeContainer = () => {
  const { data: questions, isLoading } = useQuery(
    "questions",
    QuestionServices.getQuestions
  );

  return <Home isLoading={isLoading} questionsResponse={questions} />;
};

export default HomeContainer;
