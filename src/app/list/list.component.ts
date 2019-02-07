import { Component, OnInit } from '@angular/core';
import {Contact, UserService} from '../userService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  constructor(public service:UserService){}

}
