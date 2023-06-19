import { v4 as uuid } from 'uuid';

export interface TipoHumor {
  type: 'CALMO' | 'NORMAL' | 'IRRITADO';
}

export class Registro {
  public id: string = uuid();
  public data!: string;
  public totalConsumidos!: number;
  public precoPack!: number;
  public qtdePack!: number;
  public tipoHumor: string;

  constructor(
    data: string,
    totalConsumidos: number,
    precoPack: number,
    qtdePack: number,
    tipoHumor: string
  ) {
    this.id = uuid();
    this.data = data;
    this.totalConsumidos = totalConsumidos;
    this.precoPack = precoPack;
    this.qtdePack = qtdePack;
    this.tipoHumor = tipoHumor;
  }
}
