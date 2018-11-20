import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-a5',
  templateUrl: './forms-a5.component.html',
  styleUrls: ['./forms-a5.component.css']
})
export class FormsA5Component implements OnInit {

  formA5:  FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formA5 = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: ['']
    });
  }
}

