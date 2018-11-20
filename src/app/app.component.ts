import { Component, OnInit } from '@angular/core';
import { FormsListing } from '../assets/formListing';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Attorney-cases';
  formListing = new FormsListing();
  formLists = [];
  pills = [];
  constructor(public router: Router) {}
  ngOnInit(): void {
    this.formLists = this.formListing.formListing;
    this.formLists.forEach(formSelected => {
      if (formSelected.default) {
        this.pills.push({
          id: formSelected.id,
          name: formSelected.name
        });
      }
    });
  }
  addForm(evt) {
    if (evt.target.checked) {
      this.pills.push ({
        id: evt.target.id,
        name: evt.target.name
      });
      this.router.navigate(['form' + evt.target.name]);
    } else {
      const index = this.pills.findIndex(x => x.id === evt.target.id);
      this.pills.splice(index, 1);
      this.router.navigate(['form' + this.pills[this.pills.length-1].name]);
    }
  }
}
