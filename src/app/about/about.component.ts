import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  searchTerm:string = '';
  // friends:string[] = ["ahmed","ali","mohamed","rana"];

  // addFriend():void {
  //   this.friends.push("Ahmed ismail")
  // }

  users: User[] = [
    {name:'Ahmed', age:30, salary:10000},
    {name:'Ali', age:30, salary:3000},
    {name:'Mohamed', age:30 , salary:5000},
    {name:'Rana', age:30 , salary:9000},
  ];


  products:any[]=[
    {name:'product-1',price:3000,onSale:true,imgPath:'./assets/images/1.jpg'},
    {name:'product-2',price:9000,onSale:false,imgPath:'./assets/images/2.jpg'},
    {name:'product-3',price:3000,onSale:true,imgPath:'./assets/images/3.jpg'},
    {name:'product-4',price:8000,onSale:false,imgPath:'./assets/images/4.jpg'},
    {name:'product-5',price:3000,onSale:false,imgPath:'./assets/images/img10.jpg'},
    {name:'product-6',price:6000,onSale:true,imgPath:'./assets/images/img5.jpg'},
  ]



}
