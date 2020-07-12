import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTemplatesComponent } from './features/comp-templates/comp-templates.component';

const routes: Routes = [
  {
    path: '', component: CompTemplatesComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
