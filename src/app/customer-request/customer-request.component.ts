import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.scss']
})
export class CustomerRequestComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'address', 'number'];
  dataSource = ELEMENT_DATA;

  constructor(private _snackBar: MatSnackBar) {}

  openAccept(message: string) {
    this._snackBar.open(message);
  }
  openReject(message: string) {
    this._snackBar.open(message);
  }
  ngOnInit(): void {
  }

}
