import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalesDialogComponent } from '../sales-dialog/sales-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  address: string;
  number: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Teju', address:'Barshi', number:9234434543 },
  {position: 2, name: 'Anjali', address: 'Nagar', number:9676565454 },
  {position: 3, name: 'Madhavi', address: 'Pune', number:8546563434},
  {position: 4, name: 'Sushamita', address: 'Pune', number:9885443534},
  {position: 5, name: 'Kanchan', address: 'Goa', number: 8956245343},

];

@Component({
  selector: 'app-sales-today',
  templateUrl: './sales-today.component.html',
  styleUrls: ['./sales-today.component.scss']
})

export class SalesTodayComponent {

  displayedColumns: string[] = ['position', 'name', 'number'];
  dataSource = ELEMENT_DATA;

  // selectedDate: any;

  
  // onSelect(event: any){
  //   console.log(event);
  //   this.selectedDate= event;
  // }
  constructor(public dialog: MatDialog){

  }

  openSales(value:any){
    // console.log("BILL OPEND",value);
     const dialogRef = this.dialog.open(SalesDialogComponent, {
      height: '400px',
      width: '400px',
    });
   
     dialogRef.afterClosed().subscribe((result: any) => {
       console.log(`Dialog result: ${result}`);
     });
   }

}


