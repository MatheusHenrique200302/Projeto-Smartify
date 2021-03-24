import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../core/filmes.service';
import { Filme } from '../shared/models/filmes';

// interface requestData{
//   page?: Number,
//   results?: Array<Object>
// }


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  constructor(private FilmeService: FilmesService) {}

 
  Filmes: Filme[] = [];

  pagina: number = 1;

  ngOnInit(): void {
    this.ListarFilmes();
  }

  private ListarFilmes(filmPagina:any = 1): void {
    this.FilmeService
    .getFilmes(filmPagina.toString()).subscribe((res: Filme[])=>{
      this.Filmes = res;
      console.log(this.Filmes);
    });
  }

  proxPagina(){
    console.log("próxima!!!");
  this.pagina++;
  this.Filmes = [];
    this.ListarFilmes(this.pagina);
  }

  voltarPagina(){
    if(this.pagina == 1){
      return
    }else{
      console.log("voltar!!!");
      this.pagina--;
      this.Filmes = [];
        this.ListarFilmes(this.pagina);
    }
   
  }

}
