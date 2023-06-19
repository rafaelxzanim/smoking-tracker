import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from '../models/registro';
import { RegisterPromiseService } from '../services/register-promise.service';
import { Observable } from 'rxjs';
import { ErrorUtil } from '../utils/error-util';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css'],
})
export class RegisterListComponent implements OnInit {
  registers!: Registro[];
  registerCounter: number = 0;
  registers$!: Observable<Registro[]>;
  register$!: Observable<Object>;

  constructor(private router: Router, private api: RegisterPromiseService) {}

  ngOnInit(): void {
    this.getRegisters();
  }

  getRegisters() {
    this.registers$ = this.api.allObservable();

    this.registers$.subscribe({
      next: (r) => {
        this.registers = r;
        this.registerCounter = r.length;
      },
      error: (error) => {
        alert(ErrorUtil.handleError(error));
      },
    });
  }

  deleteRegister(registro: Registro) {
    this.register$ = this.api.deleteObservable(registro);

    this.register$.subscribe({
      next: (r) => {
        alert('Registro Removido com Sucesso!');
      },
      error: (error) => {
        alert(ErrorUtil.handleError(error));
      },
    });
  }

  onClickItem(registro: Registro): void {
    this.router.navigate(['/registro/detalhes', registro?.id]);
  }

  onClickDelete(event: Event, registro: Registro): void {
    event.preventDefault();
    this.deleteRegister(registro);
    this.getRegisters();
  }
}
