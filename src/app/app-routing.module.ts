import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTemplatesComponent } from './features/comp-templates/comp-templates.component';
import { UserSettingsFormComponent } from './features/user-settings-form/user-settings-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'comp-templates' },
  {  path: 'comp-templates', component: CompTemplatesComponent},
  { path: 'user-settings', component: UserSettingsFormComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
