import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface PeriodicElement {
  name: string;
  position: number;

  number: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Teju',  number:9234434543 },
  {position: 2, name: 'Anjali', number:9676565454 },
  {position: 3, name: 'Madhavi', number:8546563434},
  {position: 4, name: 'Sushamita', number:9885443534},
  {position: 5, name: 'Kanchan',  number: 8956245343},

];

@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.scss']
})
export class CustomerRequestComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name',  'number'];
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
