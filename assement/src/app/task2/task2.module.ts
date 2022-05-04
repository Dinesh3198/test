import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './design/design.component';
const routes: Routes = [
  { path: '', component: DesignComponent }
];

@NgModule({
  declarations: [DesignComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Task2Module { }
