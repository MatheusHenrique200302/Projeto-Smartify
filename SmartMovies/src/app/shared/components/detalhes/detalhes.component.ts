import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { SeriesService } from 'src/app/core/series.service';
import { Elenco } from '../../models/elenco';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  detailId:number = 0;
  tipo : String ='';
  image: string = '';
  detalhesFilme: any = {};
  elenco: Elenco[] = [] 
 
  // use o backdrop_path
  
  constructor(private activeroute: ActivatedRoute,
    private filmesService : FilmesService,
    private seriesDetalhes : SeriesService) { }

  ngOnInit(): void {
  
    this.detailId = this.activeroute.snapshot.params['id'];
    this.tipo = this.activeroute.snapshot.params['tipo'];
    this.getDetalhes();
    this.getElenco()
  }

    getUrl(){
      return "url('"+this.image+"')";
      // background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("../assets/img/bg-masthead.jpg");
    }

    getDetalhes():void{
      if(this.tipo == 'filme'){
         this.filmesService.getFilmesDetalhes(this.detailId).subscribe((res: any) =>{
          this.detalhesFilme = res
          // console.log(this.detalhesFilme);
          this.image = this.detalhesFilme.backdrop_path
         });
      }else{

      }
    }

    getElenco():void{
      if(this.tipo == 'filme'){
        this.filmesService.getElencoDetalhes(this.detailId).subscribe((res:any[]) =>{
          this.elenco = res.slice(0,6);
        console.log(this.elenco)
        });
      }
    }

   

}
