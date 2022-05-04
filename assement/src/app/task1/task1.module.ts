import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurdComponent } from './curd/curd.component';

const routes: Routes = [
  { path: '', component: CurdComponent }
];

@NgModule({
  declarations: [CurdComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class Task1Module { }
