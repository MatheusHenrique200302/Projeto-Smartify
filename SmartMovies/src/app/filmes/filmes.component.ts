import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../core/filmes.service';
import { Filme } from '../shared/models/filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  constructor(private FilmeService: FilmesService) {}

  Filmes: Filme[] = [];
  pagina: number = 0;

  ngOnInit(): void {
    this.ListarFilmes();
  }

  private ListarFilmes(): void {
    this.pagina++;
    this.FilmeService.getFilmes(this.pagina).subscribe((filmes: Filme[]) =>
      this.Filmes.push(...filmes)
    );
    console.log(this.Filmes);
  }
}
