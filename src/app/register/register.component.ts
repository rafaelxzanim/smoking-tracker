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

import { LocalStorageService } from '../../../old/localstorage.service';
import { Registro } from '../models/registro';
import { RegisterPromiseService } from '../services/register-promise.service';
import { ErrorUtil } from '../utils/error-util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  registro!: Registro;
  register$!: Observable<Registro>;

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
  }

  ngOnInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
    M.Datepicker.init(document.querySelectorAll('.date'));
    this.setEmptyRegister();
  }

  ngAfterViewInit(): void {}

  save(): void {
    this.totalSmokedCigars =
      this.totalSmokedCigars + this.registro.totalConsumidos;

    this.register$ = this.api.saveObservable(this.registro);

    this.register$.subscribe({
      next: (r) => {
        alert('Registro Inserido com Sucesso!');
      },
      error: (error) => {
        alert(ErrorUtil.handleError(error));
      },
    });

    this.form.reset();
    this.setEmptyRegister();
  }

  update(): void {}

  enviarFormulario(): void {}

  setEmptyRegister() {
    this.registro = new Registro('', 0, 0, 0, 'CALMO');
  }
}
