import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagelayoutComponent } from './shared/pagelayout/pagelayout.component';

const routes: Routes = [
  {
    path: 'Pages', component: PagelayoutComponent,
    children: [

      { path: 'task1', loadChildren: () => import('./task1/task1.module').then(m => m.Task1Module) },
     
      {
        path: '',
        redirectTo: 'task1',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'task2', loadChildren: () => import('./task2/task2.module').then(m => m.Task2Module) },
  {
    path: '',
    redirectTo: '/Pages',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
