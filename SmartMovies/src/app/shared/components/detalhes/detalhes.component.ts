import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { SeriesService } from 'src/app/core/series.service';
import { Elenco } from '../../models/elenco';

interface Genero {
  id: Number;
  name: string;
}

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
  detailId: number = 0;
  tipo: String = '';
  image: string = '';
  detalhesFilme: any = {};
  detalhesSerie: any = {};
  elenco: Elenco[] = [];
  generos: Genero[] = [];
  isSerie: boolean = false;
  isLoading: boolean = true;

  constructor(
    private activeroute: ActivatedRoute,
    private filmesService: FilmesService,
    private seriesService: SeriesService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.detailId = this.activeroute.snapshot.params['id'];
    this.tipo = this.activeroute.snapshot.params['tipo'];
    if (this.tipo == 'filme') {
      this.isSerie = false;
    } else if (this.tipo == 'series') {
      this.isSerie = true;
    }
    this.getDetalhes();
    this.getElenco();
    this.getGenero();
  }

  getUrl() {
    return "url('" + this.image + "')";
    // background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("../assets/img/bg-masthead.jpg");
  }

  getDetalhes(): void {
    if (this.tipo == 'filme') {
      this.isSerie = false;
      this.filmesService
        .getFilmesDetalhes(this.detailId)
        .subscribe((res: any) => {
          this.detalhesFilme = res;

          this.image = this.detalhesFilme.backdrop_path;
          this.isLoading = false;
        });
    } else if (this.tipo == 'series') {
      this.isSerie = true;
      this.seriesService
        .getSeriesDetalhes(this.detailId)
        .subscribe((res: any) => {
          this.detalhesSerie = res;
          this.image = this.detalhesSerie.backdrop_path;
          this.isLoading = false;
        });
    }
  }

  getElenco(): void {
    if (this.tipo == 'filme') {
      this.filmesService
        .getElencoDetalhes(this.detailId)
        .subscribe((res: any[]) => {
          this.elenco = res.slice(0, 6);
        });
    } else if (this.tipo == 'series') {
      this.seriesService
        .getElencoDetalhes(this.detailId)
        .subscribe((res: any[]) => {
          this.elenco = res.slice(0, 6);
        });
    }
  }

  getGenero(): void {
    if (this.tipo == 'filme') {
      this.filmesService.getGender(this.detailId).subscribe((res: Genero[]) => {
        this.generos = res;
      });
    } else {
      this.seriesService.getGender(this.detailId).subscribe((res: Genero[]) => {
        this.generos = res;
      });
    }
  }
}
