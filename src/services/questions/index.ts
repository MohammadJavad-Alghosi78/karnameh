// Config
import { http } from "@/config";
// Types
import {
  CreateAnswer,
  CreateQuestion,
  GetQuestion,
  GetQuestions,
  UpdateQuestionData,
} from "./types";

class QuestionServices {
  // GET REQUESTS
  static getQuestions: GetQuestions = () => http.get("/questions/");
  static getQuestion: GetQuestion = (id) => http.get(`/questions/${id}/`);

  // POST REQUESTS
  static createQuestion: CreateQuestion = (question) =>
    http.post("/questions/", question);

  // PUT REQUESTS
  static updateQuestionData: UpdateQuestionData = (questionData) =>
    http.put(`/questions/${questionData.id}/`, questionData);
  static createAnswer: CreateAnswer = (questionData) =>
    http.put(`/questions/${questionData.id}/`, questionData);
}

export default QuestionServices;
