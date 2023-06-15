import { Injectable } from '@angular/core';
import { Registro } from '../src/app/models/registro';

@Injectable({
  providedIn: 'root',
})
export class FakeDatabase {
  private registers: Registro[];

  constructor() {
    this.registers = [];
    //this.populatedDB();
  }

  public create(registro: Registro): void {
    this.registers.push(registro);
  }

  public read(registro: Registro): Registro {
    let reg = this.registers[0];
    return reg;
  }

  public getById(id: string): Registro {
    let filteredRegister = this.all().filter((reg) => {
      return reg.id === id;
    });
    return filteredRegister[0];
  }

  public all(): Registro[] {
    return this.registers;
  }

  delete(registro: Registro): void {}

  // populatedDB() {
  //   for (let i = 1; i < 3; i++) {
  //     let date = new Date();
  //     date.setDate(date.getDate() + i);
  //     let registro = new Registro(new Date().toString(), 1 * i, 15, 20, { type: 'CALMO' });
  //     this.create(registro);
  //     let localStorage = new LocalStorageService();
  //     localStorage.create(registro);
  //   }
  // }
}
