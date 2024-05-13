import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
username: string="ahmed";
userAge: number=26;
welcome():void{
  alert("welcome "+this.username)
}
onSale:boolean=false;
sayHello():void{
  alert("hello "+this.username)
}

work(eventInfo:any):void{
  console.log(eventInfo)
}
}
