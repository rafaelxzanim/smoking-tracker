import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-smoked',
  templateUrl: './total-smoked.component.html',
  styleUrls: ['./total-smoked.component.css'],
})
export class TotalSmokedComponent {
  averageLostLifeTimePerCigar: number = 11;

  @Input() totalSmoked: number = 0;
}
