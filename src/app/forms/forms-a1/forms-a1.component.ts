import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-a1',
  templateUrl: './forms-a1.component.html',
  styleUrls: ['./forms-a1.component.css']
})
export class FormsA1Component implements OnInit {
  formA1:  FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formA1 = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: ['']
    });
  }
}

