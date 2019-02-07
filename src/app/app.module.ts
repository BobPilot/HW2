import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import {UserService} from './userService';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
