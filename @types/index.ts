export interface IQuiz {
  word?: string;
  answerOption?: IAnswerOption;
}

export interface IAnswerOption {
  isCorrect?: boolean;
  answerText?: string;
}
export interface ILevel {
  id: any;
  name: string;
  borderColor: string;
  textColor: string;
}

export interface INavbar {
  id: any;
  name: string;
  color: string;
  href: string;
}
