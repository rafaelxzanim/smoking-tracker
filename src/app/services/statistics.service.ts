import { Injectable } from '@angular/core';
import { RegisterPromiseService } from './register-promise.service';
import { Registro } from '../models/registro';
import { Observable, map } from 'rxjs';
import { Statistics } from '../interface/Statistics';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private registerService: RegisterPromiseService) {}

  getStatistics(): Observable<Statistics> {
    return this.registerService.allObservable().pipe(
      map((registers: Registro[]) => {
        let values = registers.map(
          (register: Registro) => register.totalConsumidos
        );
        let total = values.reduce((acc, value) => acc + value, 0);
        const mediaCigarros = total / registers.length;

        const minQtdCigarros = values.reduce(
          (min, current) => (current < min ? current : min),
          values[0]
        );

        const maxQtdCigarros = values.reduce(
          (max, current) => (current > max ? current : max),
          values[0]
        );

        values = registers.map(
          (register: Registro) => register.precoPack / register.qtdePack
        );
        total = values.reduce((acc, value) => acc + value, 0);
        const mediaGasta = total / registers.length;

        let statistics: Statistics = {
          mediaCigarros,
          maxQtdCigarros,
          minQtdCigarros,
          mediaGasta,
          mediaGastaMes: mediaGasta * 30,
          mediaGastAno: mediaGasta * 365,
        };

        return statistics;
      })
    );
  }
}
