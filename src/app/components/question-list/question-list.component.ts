import { Component, OnInit } from '@angular/core';
import { Question } from '../../modals/question.interface';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this.questions = this._data.getQuestions();
  }

  addQuestion(question: Question) {
    this._data.addQuestion(question);
  }
}
