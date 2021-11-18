import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVComponent } from '../dialog-v/dialog-v.component';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit{
  constructor(public dialog: MatDialog){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

 openDialog(){
  const dialogRef = this.dialog.open(DialogComponent, {
    height: '740px',
    width: '350px',
 });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
openViewDialog(){
  const dialogRef = this.dialog.open(DialogVComponent, {
    height: '400px',
    width: '600px',
 });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
 }


