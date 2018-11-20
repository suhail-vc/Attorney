import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-a8',
  templateUrl: './forms-a8.component.html',
  styleUrls: ['./forms-a8.component.css']
})
export class FormsA8Component implements OnInit {
  formA8:  FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formA8 = this.fb.group({
      fullName: [''],
      'contactNumber': [],
      'gender': new FormControl('Male')
    });
  }
}
