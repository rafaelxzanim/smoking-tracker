import { Injectable } from '@angular/core';
import { Registro } from './registro';

@Injectable({
  providedIn: 'root',
})
export class FakeDatabase {
  private registers: Registro[];

  constructor() {
    this.registers = [];
    this.populatedDB();
  }

  public create(registro: Registro): void {
    this.registers.push(registro);
  }

  public read(registro: Registro): Registro {
    let reg = this.registers[0];
    return reg;
  }

  public getById(id: number): Registro {
    let filteredRegister = this.all().filter((reg) => {
      return reg.id === id;
    });
    return filteredRegister[0];
  }

  public all(): Registro[] {
    return this.registers;
  }

  delete(registro: Registro): void {}

  populatedDB() {
    for (let i = 1; i < 11; i++) {
      let date = new Date();
      date.setDate(date.getDate() + i);
      this.create(new Registro(i, date, 1 * i, 15, 20, { type: 'CALMO' }));
    }
  }
}
