import { Injectable } from '@angular/core';
import { Registro } from './registro';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey = 'registros';

  constructor() { }

  getData(): Registro[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) as Registro[] : [];
  }

  setData(data: Registro[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  create(item: Registro): void {
    const data = this.getData();
    data.push(item);
    this.setData(data);
  }

  getById(index: string): Registro {
    const data = this.getData();
    let registroFiltered = data.filter(registro => registro.id === index);
    return registroFiltered[0] ?? [];
  }

  update(index: number, newItem: Registro): void {
    const data = this.getData();
    data[index] = newItem;
    this.setData(data);
  }

  delete(index: number): void {
    const data = this.getData();
    data.splice(index, 1);
    this.setData(data);
  }
}
