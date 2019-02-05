import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../app.component';
@Component({
  selector: 'app-form',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Output() newContactEvent: EventEmitter<Contact> = new EventEmitter();

  currName:string = '';
  currEmail:string = '';
  currPhone:string = '';
  currAddress:string = '';

  addContact(){
    this.newContactEvent.emit({
      name:this.currName,
      email:this.currEmail,
      phone:this.currPhone,
      address:this.currAddress
    });
    this.currName = '';
    this.currEmail = '';
    this.currPhone = '';
    this.currAddress = '';
  }
}
