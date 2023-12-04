import { http } from "@/config";
import {
  CreateQuestion,
  GetQuestion,
  GetQuestions,
  UpdateQuestionData,
} from "./types";

class QuestionServices {
  static getQuestions: GetQuestions = () => http.get("/questions/");
  static getQuestion: GetQuestion = (id) => http.get(`/questions/${id}/`);

  static updateQuestionData: UpdateQuestionData = (questionData) =>
    http.put(`/questions/${questionData.id}/`, questionData);

  static createQuestion: CreateQuestion = (question) =>
    http.post("/questions/", question);
}

export default QuestionServices;
