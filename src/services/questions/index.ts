import { http } from "@/config";
import { CreateQuestion, GetQuestion, GetQuestions } from "./types";

class QuestionServices {
  static getQuestions: GetQuestions = () => http.get("/questions/");
  static createQuestion: CreateQuestion = (question) =>
    http.post("/questions/", question);
  static getQuestion: GetQuestion = (id) => http.get(`/questions/${id}/`);
}

export default QuestionServices;
