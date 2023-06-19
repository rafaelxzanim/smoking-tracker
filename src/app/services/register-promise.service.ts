import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterPromiseService {
  URL = 'http://localhost:3000/registros';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  all(): Promise<Registro[]> {
    return firstValueFrom(this.httpClient.get<Registro[]>(`${this.URL}`));
  }

  allObservable(): Observable<Registro[]> {
    return this.httpClient.get<Registro[]>(`${this.URL}`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getByID(id: string): Promise<Registro> {
    return firstValueFrom(this.httpClient.get<Registro>(`${this.URL}/${id}`));
  }

  getByIDObservable(id: string): Observable<Registro> {
    return this.httpClient.get<Registro>(`${this.URL}/${id}`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  delete(registro: Registro) {
    return firstValueFrom(this.httpClient.delete(`${this.URL}/${registro.id}`));
  }

  deleteObservable(registro: Registro): Observable<Object> {
    return this.httpClient.delete(`${this.URL}/${registro.id}`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
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

  saveObservable(registro: Registro): Observable<Registro> {
    return this.httpClient
      .post<Registro>(this.URL, JSON.stringify(registro), this.httpOptions)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
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
