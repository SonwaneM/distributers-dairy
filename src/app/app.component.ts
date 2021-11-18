import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Distributers-Dairy';
  busy!: boolean;
  

  constructor(public profileService: ProfileService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit(data: any) {
    console.log(data);
  };
//   constructor(public profileService:ProfileService){
// this.profileService.navbarFlag=false;
//   }
}
