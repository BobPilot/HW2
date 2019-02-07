
export class UserService{

  contacts:Contact[]=[];

  currContact:Contact|null = null;
  currIndex:number = -1;

  isEdited:boolean = false;

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
    if(this.isEdited){
      this.contacts[this.currIndex] = cont;
      this.currContact = cont;
      this.isEdited = false;
    }else {
      this.contacts.push(cont);
    }
  }

}

export type Contact={
  name:string;
  email:string;
  phone:string;
  address:string;
}
