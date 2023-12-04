// node_modules
import { AxiosResponse } from "axios";

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

export type GetQuestions = () => Promise<AxiosResponse<Array<IQuestion>>>;
export type GetQuestion = (id: string | number) => any;
export type CreateQuestion = (
  question: IQuestion
) => Promise<AxiosResponse<any>>;
