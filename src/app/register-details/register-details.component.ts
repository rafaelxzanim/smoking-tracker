import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeDatabase } from '../fake-database';
import { Registro, TipoHumor } from '../registro';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css'],
})
export class RegisterDetailsComponent implements OnInit {
  registro!: Registro;

  constructor(private route: ActivatedRoute, private db: FakeDatabase) {
    console.log('componente: register', db.all()[0].data);
  }

  ngOnInit(): void {
    let idParam: number = +this.route.snapshot.paramMap.get('id')!;
    this.registro = this.db.getById(idParam);
  }
}
