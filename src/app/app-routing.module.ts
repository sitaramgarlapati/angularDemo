import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './features/basic/basic.component';
import { TemplatedrivenComponent } from './features/templatedriven/templatedriven.component';
import { ReactiveComponent } from './features/reactive/reactive.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent} from './features/products/product-list.component';
import { LifeCycleHooksComponent} from './features/life-cycle-hooks/life-cycle-hooks.component';
import { ObservablesExampleComponent} from './features/observables-example/observables-example.component';
import { ObservablesPipesComponent} from './features/observables-pipes/observables-pipes.component';
import {TemplateDrivenBasicComponent} from './features/templatedriven/templatedriven-basic.component';
import {ReactiveBasicComponent} from './features/reactive/reactive-basic.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {  path: 'basics', component: BasicComponent},
  {  path: 'templateuser', component: TemplatedrivenComponent},
  {  path: 'templateformbasic', component: TemplateDrivenBasicComponent},
  {  path: 'reactiveformbasic', component: ReactiveBasicComponent},
  {  path: 'reactiveuser', component: ReactiveComponent},
  {  path: 'products', component: ProductListComponent},
  {  path: 'lifecyclehooks', component: LifeCycleHooksComponent},
  {  path: 'observables', component: ObservablesExampleComponent},
  {  path: 'observables-pipes', component: ObservablesPipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
