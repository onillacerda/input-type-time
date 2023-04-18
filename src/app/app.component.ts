import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dueDateControl = new FormGroup({});
  context = 'details';

  otherForm: FormGroup;

  ngOnInit() {
    this.otherForm = new FormGroup({
      absoluteTime: new FormControl(this.today, Validators.required),
    });
  }
  dateTime = new Date();
  today = formatDate(this.dateTime, 'HH:mm', this.locale);

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  formatMyDate() {
    const time = formatDate(this.dateTime, 'HH:mm', this.locale);
  }
}
