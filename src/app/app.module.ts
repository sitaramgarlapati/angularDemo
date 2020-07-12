import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//Related to Components & Tempalates
import { CompTemplatesComponent } from './features/comp-templates/comp-templates.component';
import { UserSettingsFormComponent } from './features/user-settings-form/user-settings-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    //Content Tempatles
    CompTemplatesComponent,
    UserSettingsFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [HeaderComponent],
  bootstrap: [AppComponent ]
})
export class AppModule { }
