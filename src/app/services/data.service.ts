import { Injectable } from '@angular/core';

import { Question } from '../modals/question.interface';


@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
    this.questions = this.getQuestions();
  }

  // Get questions array from local storage
  getQuestions(): Question[] {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];

    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // Add a question to local storage
  addQuestion(question: Question): void {
    this.questions.unshift(question);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  // Delete a question from local storage array 'questions'
  deleteQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
