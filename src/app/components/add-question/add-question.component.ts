import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Question } from '../../modals/question.interface';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Output() questionAdded = new EventEmitter<Question>();

  text: string;
  answer: string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion(): void {
    console.log(this.text);
    this.questionAdded.emit({
      text: this.text,
      answer: this.answer,
      hide: true
    });
  }
}
