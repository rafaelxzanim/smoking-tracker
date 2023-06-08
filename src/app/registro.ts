import { v4 as uuid } from 'uuid';

export interface TipoHumor {
  type: 'CALMO' | 'NORMAL' | 'IRRITADO';
}

export class Registro {
  //private id: string = uuid();
  public id: number;
  public data: Date;
  public totalConsumidos: number;
  public precoPack: number;
  public qtdePack: number;
  public tipoHumor: TipoHumor | undefined;

  constructor(
    id:number,
    date: Date,
    totalConsumidos: number,
    precoPack: number,
    qtdePack: number,
    tipoHumor: TipoHumor | undefined
  ) {
    //this.id = uuid();
    this.id = id;
    this.data = date;
    this.totalConsumidos = totalConsumidos;
    this.precoPack = precoPack;
    this.qtdePack = qtdePack;
    this.tipoHumor = tipoHumor;
  }
}
