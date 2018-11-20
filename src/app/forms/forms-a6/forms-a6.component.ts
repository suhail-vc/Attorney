import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forms-a6',
  templateUrl: './forms-a6.component.html',
  styleUrls: ['./forms-a6.component.css']
})
export class FormsA6Component implements OnInit {
  formA6: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formA6 = this.fb.group({
      'companyName': [''],
      'date': new Date,
      'category': new FormControl('form2a'),
    });
  }
}
