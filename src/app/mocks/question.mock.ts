import { Question } from '../modals/question.interface';

const questionList: Question[] = [
          {
        text: '¿Cual es tu nombre?',
        answer: 'Mi nombre es Jorge',
        hide: true
      },
      {
        text: '¿Cual es tu color favorito?',
        answer: 'Mi color favorito es el azul',
        hide: true
      },
      {
        text: '¿Cual es tu lenguaje favorito?',
        answer: 'Mi lenguaje favorito es JavaScript',
        hide: true
      },
];

export const QUESTION_LIST = questionList;
