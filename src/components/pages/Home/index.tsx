// node_modules
import { AxiosResponse } from "axios";
// Components
import { Loading, QuestionsSection, Container, Header } from "@/components";
// Types
import { IQuestion } from "@/services/questions/types";
// Strings
import { words } from "@/strings";

interface IHomeProps {
  isLoading: boolean;
  questionsResponse?: AxiosResponse<Array<IQuestion>>;
}

export const Home = ({ isLoading, questionsResponse }: IHomeProps) => (
  <>
    <Header title={words.questionsList} />
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <QuestionsSection
          hasData={!!questionsResponse?.data.length}
          questionsResponse={questionsResponse}
        />
      )}
    </Container>
  </>
);
