import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import * as M from 'materialize-css';
import { FakeDatabase } from '../fake-database';
import { Registro } from '../registro';
import { LocalStorageService } from '../local-storage-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  @ViewChild('form') form!: NgForm;

  registro!:Registro;


  qtySmoked: number = 0;
  totalSmokedCigars: number = 0;
  @Output() messageEvent = new EventEmitter<number>();

  constructor(private db: LocalStorageService) {
    //console.log('componente: register', db.all()[0].data);

    this.totalSmokedCigars = db
      .getData()
      .reduce((sum, registro) => {console.log(sum, typeof sum, typeof registro.totalConsumidos); return sum + (+registro.totalConsumidos);}, 0);
      console.log(this.totalSmokedCigars);
  }

  ngOnInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
    M.Datepicker.init(document.querySelectorAll('.date'));
    //@this.registro = new Registro('', 0, 0, 0, {type: 'CALMO'});
    this.registro = new Registro('', 0, 0, 0, 'CALMO');
    console.log(this.registro);
    // setInterval(()=>{
    //   this.totalSmokedCigars = +this.totalSmokedCigars + 10;
    // }, 1000)
  }

  ngAfterViewInit(): void{


  }

  save(): void {
    this.totalSmokedCigars = this.totalSmokedCigars + this.registro.totalConsumidos;
    //console.log(this.totalConsumidos);
    this.db.create(this.registro);
    //@this.registro = new Registro('', 0, 0, 0, {type: 'CALMO'});

    //TODO: save in the database
    alert('Registro Inserido com Sucesso!');
    console.log('Registro Inserido com Sucesso!');
    this.form.reset();
    this.registro = new Registro('', 0, 0, 0, 'CALMO');
  }

  update(): void {}

  enviarFormulario():void{
    console.log('click', 'enviarFormulario');
    console.log('click', this.registro);
  }
}
