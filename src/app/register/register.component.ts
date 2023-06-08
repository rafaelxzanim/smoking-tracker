import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as M from 'materialize-css';
import { FakeDatabase } from '../fake-database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  qtySmoked: number = 0;
  totalSmokedCigars: number = 0;
  @Output() messageEvent = new EventEmitter<number>();

  constructor(private db: FakeDatabase) {
    console.log('componente: register', db.all()[0].data);

    this.totalSmokedCigars = db
      .all()
      .reduce((sum, registro) => sum + registro.totalConsumidos, 0);
  }

  ngOnInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
  }

  save(): void {
    this.totalSmokedCigars = +this.totalSmokedCigars + +this.qtySmoked;
    //TODO: save in the database
  }

  update(): void {}
}
