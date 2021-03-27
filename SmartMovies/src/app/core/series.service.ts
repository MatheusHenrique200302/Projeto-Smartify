import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../shared/models/series';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private htpp: HttpClient) {}

  url1 = 'http://localhost:3000/series';
  url2 = 'http://localhost:3000/series/';

  getSeries(pagina: number): Observable<Serie[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('page', pagina.toString());
    return this.htpp
      .get<Serie[]>(this.url1, { params: httpParams })
      .pipe(map((res: any) => res.results));
  }

  getSeriesDetalhes(id: number): any {
    let newurl = this.url2 + id;
    return this.htpp.get<Serie[]>(newurl);
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
