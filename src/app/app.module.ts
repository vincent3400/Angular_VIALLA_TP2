import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarreTitreComponent } from './barre-titre/barre-titre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';

import { PageComponent } from './page/page.component';
import { MenuComponent } from './menu/menu.component';

import {ChatServiceService} from './chat-service.service';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./users.service";
@NgModule({
  declarations: [
    AppComponent,
    BarreTitreComponent,
    PageComponent,
    MenuComponent,
    FormGroup,
    FormControl
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FormGroup,
    FormControl
  ],
  providers: [ChatServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
