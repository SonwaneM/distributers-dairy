import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sales-dialog',
  templateUrl: './sales-dialog.component.html',
  styleUrls: ['./sales-dialog.component.scss']
})
export class SalesDialogComponent implements OnInit {
  color: ThemePalette = 'accent'
  

  formatLabel(value: number) {
    // if (value >= 1) {
    //   return Math.round(value / 0.5) + 'ltr';
    // }

    return value + 'ltr';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
