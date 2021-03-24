import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class FilmesService {
 url = 'localhost:3000/filmes';

  constructor(private htpp : HttpClient) { }

  getFilmes(page : number){
    let httpParams = new HttpParams();
    httpParams.set('page',page.toString());
    return this.htpp.get(this.url);
  }



}
