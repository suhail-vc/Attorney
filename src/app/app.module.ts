import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CaseComponent } from './case/case.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsA1Component } from './forms/forms-a1/forms-a1.component';

import { FormsA2Component } from './forms/forms-a2/forms-a2.component';

import { FormsA3Component } from './forms/forms-a3/forms-a3.component';
import { FormsA4Component } from './forms/forms-a4/forms-a4.component';
import { FormsA5Component } from './forms/forms-a5/forms-a5.component';
import { FormsA6Component } from './forms/forms-a6/forms-a6.component';
import { FormsA7Component } from './forms/forms-a7/forms-a7.component';
import { FormsA8Component } from './forms/forms-a8/forms-a8.component';
const routes: Routes = [
  { path: '', redirectTo: 'formA1', pathMatch: 'full'},
  { path: 'formA1', component: FormsA1Component },
  { path: 'formA2', component: FormsA2Component },
  { path: 'formA3', component: FormsA3Component },
  { path: 'formA4', component: FormsA4Component },
  { path: 'formA5', component: FormsA5Component },
  { path: 'formA6', component: FormsA6Component },
  { path: 'formA7', component: FormsA7Component },
  { path: 'formA8', component: FormsA8Component },
];


@NgModule({
  declarations: [
    AppComponent,
    CaseComponent,
    FormsA1Component,
    FormsA2Component,
    FormsA3Component,
    FormsA4Component,
    FormsA5Component,
    FormsA6Component,
    FormsA7Component,
    FormsA8Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
