import { v4 as uuid } from 'uuid';

export interface TipoHumor {
  type: 'CALMO' | 'NORMAL' | 'IRRITADO';
}

export class Registro {
  public id: string = uuid();
  //public id!: number;
  public data!: string;
  public totalConsumidos!: number;
  public precoPack!: number;
  public qtdePack!: number;
  //@public tipoHumor: TipoHumor | undefined;
  public tipoHumor: string;

  constructor(
    //id:number,
    data: string,
    totalConsumidos: number,
    precoPack: number,
    qtdePack: number,
    //@tipoHumor: TipoHumor | undefined
    tipoHumor: string
  ) {
    this.id = uuid();
    //this.id = id;
    this.data = data;
    this.totalConsumidos = totalConsumidos;
    this.precoPack = precoPack;
    this.qtdePack = qtdePack;
    this.tipoHumor = tipoHumor;
  }
}
