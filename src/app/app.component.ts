import {Component, EventEmitter, Output} from '@angular/core';
import {UserService} from './userService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public service:UserService){}

  getCurrContact(){
    return this.service.currContact;
  }


}



