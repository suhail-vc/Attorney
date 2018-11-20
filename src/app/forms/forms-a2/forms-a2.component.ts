import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-a2',
  templateUrl: './forms-a2.component.html',
  styleUrls: ['./forms-a2.component.css']
})
export class FormsA2Component implements OnInit {
  formA2: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formA2 = this.fb.group({
      'fullName': [''],
      'contactNumber': [],
      'gender': new FormControl('Male')
    });
  }

}
