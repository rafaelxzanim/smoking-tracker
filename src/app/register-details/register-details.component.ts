import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeDatabase } from '../fake-database';
import { Registro, TipoHumor } from '../registro';
import { LocalStorageService } from '../local-storage-service';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css'],
})
export class RegisterDetailsComponent implements OnInit {
  registro!: Registro;

  constructor(private route: ActivatedRoute, private db: LocalStorageService) {
    //console.log('componente: register', db.all()[0].data);
    console.log('componente: register', db.getData);
  }

  ngOnInit(): void {
    //let idParam: string = +this.route.snapshot.paramMap.get('id')!;
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
    this.registro = this.db.getById(idParam);
    console.log(this.db.getById(idParam));
  }
}
