import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../shared/models/filmes';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(private htpp: HttpClient) {}

  url = 'localhost:3000/filmes';

  getFilmes(pagina: number): Observable<Filme[]> {
    let httpParams = new HttpParams();
    httpParams.set('page', pagina.toString());
    return this.htpp.get<Filme[]>(this.url);
  }
}
