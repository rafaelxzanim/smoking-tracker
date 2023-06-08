import { Component, OnInit } from '@angular/core';
import { FakeDatabase } from '../fake-database';
import { Registro } from '../registro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css'],
})
export class RegisterListComponent implements OnInit {
  registers: Registro[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: FakeDatabase
  ) {
    console.log('componente: register', db.all()[0].data);
    this.registers = db.all();
  }

  ngOnInit(): void {}

  onClickItem(registro: Registro): void {
    this.router.navigate(['/registro/detalhes', registro?.id]);
  }

  onClickDelete(): void {}
}
