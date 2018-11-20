import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forms-a3',
  templateUrl: './forms-a3.component.html',
  styleUrls: ['./forms-a3.component.css']
})
export class FormsA3Component implements OnInit {
  formA3: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formA3 = this.fb.group({
      'companyName': [''],
      'date': new Date,
      'category': new FormControl('form2a'),
    });
  }

}
