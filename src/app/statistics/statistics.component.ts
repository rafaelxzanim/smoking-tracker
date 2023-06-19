import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { Registro } from '../models/registro';
import { ErrorUtil } from '../utils/error-util';
import { Statistics } from '../interface/Statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  statistics!: Statistics;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit() {
    this.statisticsService.getStatistics().subscribe({
      next: (registers) => {
        this.statistics = registers;
      },
      error: (error) => {
        alert(ErrorUtil.handleError(error));
      },
    });
  }
}
