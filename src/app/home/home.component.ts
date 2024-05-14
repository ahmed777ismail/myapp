import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeFriends:string[]=[];
constructor(_UserdataService:UserdataService){
  this.homeFriends=_UserdataService.friends;
}

}
