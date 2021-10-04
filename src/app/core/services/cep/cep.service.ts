import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ViaCepResponse } from '../../models/ViaCepResponse';
import { mapToClass } from '../../utils/custom-operators';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  getCep(cep: string): Observable<ViaCepResponse> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    return this.http
      .get(url)
      .pipe(tap(console.log), mapToClass(ViaCepResponse), tap(console.log));
  }
}
