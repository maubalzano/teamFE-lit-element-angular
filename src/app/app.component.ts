import { Component } from '@angular/core';
import { User } from 'teamfe-lit-user-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamfe-lit-angular';

  public user: User = {
    firstName: "Francesco",
    lastName: "Rossi",
    dob: '22-09-2022',
    gender: 'male',
    address: 'Viale Manzoni 6',
    imgUrl: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'
  }

  public isDisabled = false;

  public fireEvent(){
    console.log('event')
    this.isDisabled = !this.isDisabled
  }
}
