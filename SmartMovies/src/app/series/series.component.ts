import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from '../core/series.service';
import { Serie } from '../shared/models/series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  constructor(private seriesService: SeriesService, private router: Router) {}

  series: Serie[] = [];
  pagina: number = 1;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = true;
    this.ListarSeries();
  }

  private ListarSeries(seriepag: any = 1): void {
    this.seriesService
      .getSeries(seriepag.toString())
      .subscribe((res: Serie[]) => {
        this.series = res;
        this.isLoading = false;
      });
  }

  proxPagina() {
    this.isLoading = true;
    this.pagina++;
    this.series = [];
    this.ListarSeries(this.pagina);
  }

  voltarPagina() {
    if (this.pagina == 1) {
      return;
    } else {
      this.isLoading = true;
      this.pagina--;
      this.series = [];
      this.ListarSeries(this.pagina);
    }
  }
  openDetails(id: Number) {
    this.router.navigateByUrl('detalhes/series/' + id);
  }
}
