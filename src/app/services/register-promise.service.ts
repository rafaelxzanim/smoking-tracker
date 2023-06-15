// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterPromiseService {

//   constructor() { }
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterPromiseService {
  URL = 'http://localhost:3000/registros';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  // getByID(id: string): Promise<Registro[]> {
  //   return this.httpClient.get<Registro[]>(`${this.URL}/${id}`).toPromise()
  // }

  all(): Promise<Registro[]> {
    return firstValueFrom(this.httpClient.get<Registro[]>(`${this.URL}`));
  }

  getByID(id: string): Promise<Registro> {
    return firstValueFrom(this.httpClient.get<Registro>(`${this.URL}/${id}`));
  }

  save(registro: Registro): Promise<Registro> {
    return firstValueFrom(
      this.httpClient.post<Registro>(
        this.URL,
        JSON.stringify(registro),
        this.httpOptions
      )
    );
  }

  delete(registro: Registro) {
    return firstValueFrom(this.httpClient.delete(`${this.URL}/${registro.id}`));
  }

  // patch(registro: Registro): Promise<Registro> {
  //   return this.httpClient
  //     .patch<Registro>(
  //       `${this.URL}/${registro.id}`,
  //       JSON.stringify(registro),
  //       this.httpOptions
  //     )
  //     .toPromise();
  // }

  // update(registro: Registro): Promise<Registro> {
  //   return this.httpClient
  //     .put<Registro>(
  //       `${this.URL}/${registro.id}`,
  //       JSON.stringify(registro),
  //       this.httpOptions
  //     )
  //     .toPromise();
  // }
}
