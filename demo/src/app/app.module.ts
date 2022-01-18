import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
//decleration of form model

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
