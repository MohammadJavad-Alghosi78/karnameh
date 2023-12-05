// node_modules
import { AxiosResponse } from "axios";

// Interfaces
export interface IAnswer {
  name: string;
  image: string;
  answer: string;
  date: string;
  time: string;
  answerId: string;
  likes: number;
  disLikes: number;
}

export interface IQuestion {
  id: string | number;
  title: string;
  image: string;
  description: string;
  date: string;
  numOfAnswers: number;
  time: string;
  answers: Array<IAnswer>;
}

// Type aliases (for services)
export type GetQuestions = () => Promise<AxiosResponse<Array<IQuestion>>>;

export type GetQuestion = (
  id: string | number
) => Promise<AxiosResponse<IQuestion>>;

export type UpdateQuestionData = (
  q: IQuestion
) => Promise<AxiosResponse<IQuestion>>;

export type CreateQuestion = (
  q: IQuestion
) => Promise<AxiosResponse<IQuestion>>;

export type CreateAnswer = (q: IQuestion) => Promise<AxiosResponse<IQuestion>>;
