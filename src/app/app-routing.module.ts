import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTemplatesComponent } from './features/comp-templates/comp-templates.component';
import { BasicComponent } from './features/basic/basic.component';
import { TemplatedrivenComponent } from './features/templatedriven/templatedriven.component';
import { ReactiveComponent } from './features/reactive/reactive.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductListComponent} from './features/products/product-list.component';



const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {  path: 'comp-templates', component: CompTemplatesComponent},
  {  path: 'basics', component: BasicComponent},
  {  path: 'templateuser', component: TemplatedrivenComponent},
  {  path: 'reactiveuser', component: ReactiveComponent},
  {  path: 'products', component: ProductListComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
