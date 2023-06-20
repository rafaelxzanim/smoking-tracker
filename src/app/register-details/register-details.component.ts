import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registro } from '../models/registro';
import { RegisterPromiseService } from '../services/register-promise.service';
import { Observable } from 'rxjs';
import { ErrorUtil } from '../utils/error-util';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css'],
})
export class RegisterDetailsComponent implements OnInit {
  register!: Registro;
  register$!: Observable<Registro>;

  constructor(
    private route: ActivatedRoute,
    private api: RegisterPromiseService
  ) {}

  ngOnInit(): void {
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
    this.getRegister(idParam);
  }

  getRegister(id: string) {
    this.register$ = this.api.getByIDObservable(id);

    this.register$.subscribe({
      next: (r) => {
        this.register = r;
      },
      error: (error) => {
        alert(ErrorUtil.handleError(error));
      },
    });
  }
}
