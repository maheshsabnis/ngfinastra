import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  name: string;
  url:string;
  fullName: string;
  completeName:string;
  characters:Array<string>;
  selectedActor:string;
  isShow:boolean;
  depts:any;
  constructor(){
    this.message = 'The Component';
    this.name = 'Angular is great!!';
    this.url = "https://www.webnethelper.com";
    this.fullName = '';
    this.completeName = "";
    this.completeName += this.fullName;
    this.characters = new Array<string>();
    this.selectedActor = "";
    this.isShow = true;

    this.characters.push("Sean Connary");
    this.characters.push("George Luznaby");
    this.characters.push("Roger Moore");
    this.characters.push("Trimothy Dalton");
    this.characters.push("Pierce Brosnon");
    this.characters.push("Daniel Criag");
    this.depts = [
      {
         id:1,name: 'it1'
    },
    {
      id:2,name: 'it2'
 },
 {
  id:3,name: 'it3'
},
  ];
  }

  alertMessage():void {
    alert(this.message);
  }
  receiveButtonValue(event:any):void {
    // receiving the value attribute

    this.message += event.target.value;
  }
  toggle(): void {
    if(this.isShow){
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
  toggleShow():void {
    if(this.isShow){
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
}
