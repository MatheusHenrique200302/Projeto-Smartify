import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../shared/models/filmes';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(private htpp: HttpClient) {}

  url1 = 'http://localhost:3000/filmes';
  url2 = 'http://localhost:3000/filmes/';

  getFilmes(pagina: number): Observable<Filme[]> {
    let httpParams = new HttpParams();

    httpParams = httpParams.set('page', pagina.toString());

    return this.htpp
      .get<Filme[]>(this.url1, { params: httpParams })
      .pipe(map((res: any) => res.results));
  }

  getFilmesDetalhes(id: number): any {
    let newurl = this.url2 + id;
    return this.htpp.get<Filme[]>(newurl);
  }

  getElencoDetalhes(id: number): any {
    let newurl = this.url2 + id;
    return this.htpp
      .get<any[]>(newurl)
      .pipe(map((res: any) => res.credits.cast));
  }
  getGender(id: number): any {
    let newurl = this.url2 + id;
    return this.htpp.get<any[]>(newurl).pipe(map((res: any) => res.genres));
  }
}
