import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-a7',
  templateUrl: './forms-a7.component.html',
  styleUrls: ['./forms-a7.component.css']
})
export class FormsA7Component implements OnInit {
  formA7: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formA7 = this.fb.group({
      'fullName': [''],
      'contactNumber': [],
      'gender': new FormControl('Male')
    });
  }
}
