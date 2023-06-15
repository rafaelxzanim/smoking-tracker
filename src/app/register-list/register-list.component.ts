import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../../old/localstorage.service';
import { Registro } from '../models/registro';
import { RegisterPromiseService } from '../services/register-promise.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css'],
})
export class RegisterListComponent implements OnInit {
  registers!: Registro[];
  registerCounter: number = 0;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private api: RegisterPromiseService
  ) {
    //@LocalStorage
    //this.registers = localStorage.getData();
    //this.registerCounter = this.registers.length;
    //@LocalStorage
    this.getRegisters();
  }

  ngOnInit(): void {}

  getRegisters(){
    this.api.all().then((r: Registro[]) => {
      this.registers = r;
      this.registerCounter = r.length;
    });
  }

  onClickItem(registro: Registro): void {
    this.router.navigate(['/registro/detalhes', registro?.id]);
  }

  onClickDelete(event: Event, registro: Registro): void {
    event.preventDefault();
    this.api.delete(registro);
    this.getRegisters();
  }
}
