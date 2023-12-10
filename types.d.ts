// survey type that has a name and a id

export interface Survey {
  title: string;
  id: string;
  availableResponses: number;
  allResponses: number;
  duration: number;
  price: number;
}

export interface Question {
  id: string;
  survey: string;
  text: string;
}

export interface Choice {
  id: string;
  question: string;
  text: string;
}
