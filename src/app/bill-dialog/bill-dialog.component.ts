import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: number;
  quantity:number;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: 1,  quantity: 1, total:50 },

  

];

@Component({
  selector: 'app-bill-dialog',
  templateUrl: './bill-dialog.component.html',
  styleUrls: ['./bill-dialog.component.scss']
})
export class BillDialogComponent implements OnInit {
  displayedColumns: string[] = ['date', 'quantity', 'Total'];
  dataSource = ELEMENT_DATA;
 

  constructor() { }

  ngOnInit(): void {
  }

}
