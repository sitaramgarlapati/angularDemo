import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
//Related to Components & Tempalates
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BasicComponent } from './features/basic/basic.component';
import { TemplatedrivenComponent } from './features/templatedriven/templatedriven.component';
import { ReactiveComponent } from './features/reactive/reactive.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductModule } from './features/products/product.module';
import { LifeCycleHooksComponent } from './features/life-cycle-hooks/life-cycle-hooks.component';
import { ObservablesExampleComponent } from './features/observables-example/observables-example.component';
import { ObservablesPipesComponent } from './features/observables-pipes/observables-pipes.component';
import { TemplateDrivenBasicComponent } from './features/templatedriven/templatedriven-basic.component';
import { DependencyInjectionExampleComponent } from './features/dependency-injection-example/dependency-injection-example.component';
import { MaterialExampleComponent } from './features/material-example/material-example.component';
import {UserInjectorComponent} from './features/dependency-injection-example/user-injector.component';
//import {UserService} from './core/services/user.service';
//import { LoggerService } from './core/services/logger.service';
import { UserComponent } from './features/dependency-injection-example/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    //Content Tempatles
    BasicComponent,
    TemplatedrivenComponent,
    ReactiveComponent,
    WelcomeComponent,
    DashboardComponent,
    LifeCycleHooksComponent,
    ObservablesExampleComponent,
    ObservablesPipesComponent,
    TemplateDrivenBasicComponent,
    DependencyInjectionExampleComponent,
    MaterialExampleComponent,
    UserInjectorComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ProductModule
  ],
  providers: [],
  entryComponents: [HeaderComponent],
  bootstrap: [AppComponent ]
})
export class AppModule { }
