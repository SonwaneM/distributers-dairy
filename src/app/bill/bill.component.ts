import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStartDate } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { BillDialogComponent } from '../bill-dialog/bill-dialog.component';

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
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'address', 'number'];
  dataSource = ELEMENT_DATA;
 
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  
  constructor(public dialog: MatDialog){

  }

  ngOnInit(): void {
  }
  
  openBill(value:any){
   // console.log("BILL OPEND",value);
    const dialogRef = this.dialog.open(BillDialogComponent, {
      height: '400px',
      width: '400px',
   });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  }
  
