import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import * as M from 'materialize-css';
import { FakeDatabase } from '../../../old/fake-database';

import { LocalStorageService } from '../../../old/localstorage.service';
import { Registro } from '../models/registro';
import { RegisterPromiseService } from '../services/register-promise.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  registro!: Registro;

  qtySmoked: number = 0;
  totalSmokedCigars: number = 0;
  @Output() messageEvent = new EventEmitter<number>();

  constructor(
    private localStorage: LocalStorageService,
    private api: RegisterPromiseService
  ) {
    this.api.all().then((r: Registro[]) => {
      this.totalSmokedCigars = r.reduce((sum, registro) => {
        return sum + +registro.totalConsumidos;
      }, 0);
    });

    //@LocalStorage
    // this.totalSmokedCigars = localStorage.getData().reduce((sum, registro) => {
    //   return sum + +registro.totalConsumidos;
    // }, 0);
    //@LocalStorage
  }

  ngOnInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
    M.Datepicker.init(document.querySelectorAll('.date'));
    this.setEmptyRegister();
  }

  ngAfterViewInit(): void {}

  save(): void {
    this.totalSmokedCigars = this.totalSmokedCigars + this.registro.totalConsumidos;
    //@LocalStorage
    // this.localStorage.create(this.registro);
    // alert('Registro Inserido com Sucesso!');
    //@LocalStorage

    this.api.save(this.registro).then( (r:Registro)=>{
      alert('Registro Inserido com Sucesso!');
    })

    this.form.reset();
    this.setEmptyRegister();
  }

  update(): void {}

  enviarFormulario(): void {
    console.log('click', this.registro);
  }

  setEmptyRegister() {
    this.registro = new Registro('', 0, 0, 0, 'CALMO');
  }
}
