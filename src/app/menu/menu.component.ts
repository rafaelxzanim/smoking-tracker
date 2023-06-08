import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

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

  menuArray:Menu[] = [
    { href : "registro", description: "Novo Registro"},
    { href : "estatistica", description: "Estatísticas"},
    { href : "sobre", description: "Sobre"},
  ];

  ngOnInit(): void {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }
}
