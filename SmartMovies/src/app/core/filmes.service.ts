import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Filme } from '../shared/models/filmes';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(private htpp: HttpClient) {}

  url = 'http://localhost:3000/filmes';

  getFilmes(pagina: number): Observable<Filme[]> {
    let httpParams = new HttpParams();

    httpParams = httpParams.set('page',pagina.toString());
   
    return this.htpp.get<Filme[]>(this.url,{params: httpParams}).pipe(map((res:any)=> res.results));
  }
}
