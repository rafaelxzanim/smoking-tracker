import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../../old/localstorage.service';
import { Registro } from '../models/registro';
import { RegisterPromiseService } from '../services/register-promise.service';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css'],
})
export class RegisterDetailsComponent implements OnInit {
  registro!: Registro;

  constructor(
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
    private api: RegisterPromiseService
  ) {}

  ngOnInit(): void {
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
    this.api.getByID(idParam).then((r: Registro) => {
      this.registro = r;
    });
    //@LocalStorage
    //this.registro = this.localStorage.getById(idParam);
    //@LocalStorage
  }
}
