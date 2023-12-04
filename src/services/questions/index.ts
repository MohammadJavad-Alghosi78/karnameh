import { http } from "@/config";
import { CreateQuestion, GetQuestion, GetQuestions } from "./types";

class QuestionServices {
  static getQuestions: GetQuestions = () => http.get("/questions/");
  static getQuestion: GetQuestion = (id) => http.get(`/questions/${id}/`);

  static createQuestion: CreateQuestion = (question) =>
    http.post("/questions/", question);
}

export default QuestionServices;
