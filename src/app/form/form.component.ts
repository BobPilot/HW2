import {Component} from '@angular/core';
import {UserService} from '../userService';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  currName:string = this.service.isEdited ? this.service.currContact.name :  '';
  currEmail:string = this.service.isEdited ? this.service.currContact.email :  '';
  currPhone:string = this.service.isEdited ? this.service.currContact.phone :  '';
  currAddress:string = this.service.isEdited ? this.service.currContact.address :  '';

  constructor(public service:UserService){}


  addContact(){
    this.service.addContact({
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
