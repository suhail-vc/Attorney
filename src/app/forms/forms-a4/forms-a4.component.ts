import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-a4',
  templateUrl: './forms-a4.component.html',
  styleUrls: ['./forms-a4.component.css']
})
export class FormsA4Component implements OnInit {

  formA4:  FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formA4 = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: ['']
    });
  }
}

