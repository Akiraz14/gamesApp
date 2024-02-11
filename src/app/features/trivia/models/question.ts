export interface EvaluationResult {
  isCorrect: boolean,
  totalAnswers: number,
  totalMistakes: number,
}

export interface Answer {
  id: string;
  answer: string;
  isCorrect?: boolean;
}

export interface SimpleQuestion {
  id: string;
  category: Category;
  question: string;
  difficulty: Difficulty;
  possibleAnswers: string[];
}

export interface QuestionParameters {
  limit: number;
  categories?: string;
  difficulties?: string;
  region?: string;
  tags?: string;
  // types: string;
  // session: string;
  // preview: string;
  language?: string;
}

export enum Category {
  music = 'music',
  sport_and_leisure = 'sport_and_leisure',
  film_and_tv = 'film_and_tv',
  arts_and_literature = 'arts_and_literature',
  history = 'history',
  society_and_culture = 'society_and_culture',
  science = 'science',
  geography = 'geography',
  food_and_drink = 'food_and_drink',
  general_knowledge = 'general_knowledge',
}

// Generated by https://quicktype.io

export interface QuestionModel {
  category:         Category;
  id:               string;
  correctAnswer:    string;
  incorrectAnswers: string[];
  question:         Question;
  tags:             string[];
  type:             Type;
  difficulty:       Difficulty;
  regions:          any[];
  isNiche:          boolean;
}

export enum Difficulty {
  easy = "easy",
  hard = "hard",
  medium = "medium",
}

export interface Question {
  text: string;
}

export enum Type {
  text_choice = "text_choice",
  image_choice = "image_choice",
}