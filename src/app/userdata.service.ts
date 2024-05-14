import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() {

   }

   friends:string[] =["ahmed","ali","mohamed"];

   welcome():void {
    console.log("welcome")
   };
}
