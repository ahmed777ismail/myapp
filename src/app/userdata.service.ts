import { Injectable } from '@angular/core';

@Injectable()


export class UserdataService {

  constructor() {

   }

   friends:string[] =["ahmed","ali","mohamed"];

   welcome():void {
    console.log("welcome")
   };
}
