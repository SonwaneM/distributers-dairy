import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnInit{
  /** Based on the screen size, switch from standard to one column per row */
 
currentUser:any;
cards:any;
  constructor(private breakpointObserver: BreakpointObserver,private profileService:ProfileService) {
    console.log("Inside home component");
    this.profileService.navbarFlag=false;
   this.currentUser= this.profileService.currentUser;
   console.log("User value" ,this.currentUser);
  }
  ngOnInit(): void {
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        
          return [
            { title: this.currentUser, cols: 1, rows: 1 },
            { title: this.currentUser, cols: 1, rows: 1 },
            { title: this.currentUser, cols: 1, rows: 1 },
            { title: this.currentUser, cols: 1, rows: 1 }
          ];
        
      })
    );
  }
}
