import { BrowserModule } from '@angular/platform-browser';
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
import { CompTemplatesComponent } from './features/comp-templates/comp-templates.component';
import { BasicComponent } from './features/basic/basic.component';
import { TemplatedrivenComponent } from './features/templatedriven/templatedriven.component';
import { ReactiveComponent } from './features/reactive/reactive.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductModule } from './features/products/product.module';
import { LifeCycleHooksComponent } from './features/life-cycle-hooks/life-cycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    //Content Tempatles
    CompTemplatesComponent,
    BasicComponent,
    TemplatedrivenComponent,
    ReactiveComponent,
    WelcomeComponent,
    DashboardComponent,
    LifeCycleHooksComponent,

  ],
  imports: [
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
