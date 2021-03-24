import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full',
  },
  {
    path: 'filmes',
    component: FilmesComponent,
    children: [
      {
        path: 'detalhes/:id',
        component: DetalhesComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
