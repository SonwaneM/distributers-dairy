import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  color: ThemePalette = 'accent'
  

  formatLabel(value: number) {
    // if (value >= 1) {
    //   return Math.round(value / 0.5) + 'ltr';
    // }

    return value + 'ltr';
  }
  // constructor() { }

   ngOnInit(): void {
   }

}
