import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output('show') showEvent = new EventEmitter();

  contacts:Contact[]=[];

  currContact:Contact|null = null;
  currIndex = -1;

  removeContact(i: number):void {
    this.contacts.splice(i, 1);
    if(this.currIndex === i){
      this.currContact = null;
    }
  }

  showContact(i: number, contact: Contact) {
    this.currIndex = i;
    this.currContact = contact;
  }

  addContact(cont: Contact) {
    this.contacts.push(cont);
  }
}

export type Contact={
  name:string;
  email:string;
  phone:string;
  address:string;
}

