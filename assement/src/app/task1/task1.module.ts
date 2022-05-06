import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableviewComponent } from './tableview/tableview.component';
import { FormviewComponent } from './formview/formview.component';
import { HttpClientModule} from '@angular/common/http';
import { DxDataGridModule} from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  { path: '', component: TableviewComponent },
  { path: 'form/:mode', component: FormviewComponent },
];

@NgModule({
  declarations: [TableviewComponent, FormviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    DxDataGridModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    
  ]
})
export class Task1Module { }
