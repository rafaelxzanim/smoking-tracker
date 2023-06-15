import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { RegisterPromiseService } from '../services/register-promise.service';
import { Registro } from '../models/registro';

interface Menu{
  href : string;
  description: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  title:string = "Smoking Tracker";
  registro!:Registro;

  constructor(
    private reg: RegisterPromiseService
  ) {}

  menuArray:Menu[] = [
    { href : "registro", description: "Novo Registro"},
    { href : "estatistica", description: "Estatísticas"},
    { href : "sobre", description: "Sobre"},
  ];

  async ngOnInit(): Promise<void> {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));


    // this.registro = new Registro('', 0, 0, 0, 'CALMO');
    // this.reg.getByID('885e582a-12a8-4c13-8c33-d39b4a7b79d3').then((r:Registro)=>{
    //   this.registro = r;
    //   this.title = this.registro.data;
    //   //@STOP - PAREI AQUI ESTAVA MUNDANDO O NOME DA APLICACAO DINAMICAMENTE
    //   console.log('foiaqui?', this.registro);
    // })
    //@trecho to check

  }
}
