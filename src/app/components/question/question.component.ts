import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../../modals/question.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  showAnswer(question: Question): void {
    question.hide = !question.hide;
  }

  deleteQuestion(question: Question): void {
    this._data.deleteQuestion(question);
  }

}
