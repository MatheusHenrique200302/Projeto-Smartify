import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../core/filmes.service';
import { Filme } from '../shared/models/filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  constructor(
    private FilmeService: FilmesService,
    private router : Router
    ) {}

 
  Filmes: Filme[] = [];
  isLoading: boolean = true;
  pagina: number = 1;

  ngOnInit(): void {
    this.isLoading = true
    this.ListarFilmes();
  }

  private ListarFilmes(filmPagina:any = 1): void {
    this.FilmeService
    .getFilmes(filmPagina.toString()).subscribe((res: Filme[])=>{
      this.Filmes = res;
      console.log(this.Filmes);
      this.isLoading = false
    });
  }

  proxPagina(){
    this.isLoading = true
  this.pagina++;
  this.Filmes = [];
    this.ListarFilmes(this.pagina);
  }

  voltarPagina(){
    if(this.pagina == 1){
      return
    }else{
      this.isLoading = true
      this.pagina--;
      this.Filmes = [];
        this.ListarFilmes(this.pagina);
    }
  }

  openDetails(id:Number){
    this.router.navigateByUrl('detalhes/filme/'+id)
  }

}
