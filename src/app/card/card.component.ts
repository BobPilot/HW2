import {Component} from '@angular/core';
import {Contact, UserService} from '../userService';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(public service:UserService){
  }

}
