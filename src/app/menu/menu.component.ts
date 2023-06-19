import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { RegisterPromiseService } from '../services/register-promise.service';
import { Registro } from '../models/registro';

interface Menu {
  href: string;
  description: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  title: string = 'Smoking Tracker';
  registro!: Registro;

  constructor(private reg: RegisterPromiseService) {}

  menuArray: Menu[] = [
    { href: 'registro/listagem', description: 'Listagem Geral Consumo Cigarro' },
    { href: 'registro', description: 'Novo Registro' },
    { href: 'estatistica', description: 'Estatísticas' },
    { href: 'sobre', description: 'Sobre' },
  ];

  async ngOnInit(): Promise<void> {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }
}
