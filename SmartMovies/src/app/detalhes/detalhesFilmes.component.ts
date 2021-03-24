import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhesFilmes.component.html',
  styleUrls: ['./detalhesFilmes.component.css']
})
export class DetalhesFilmesComponent implements OnInit {

  constructor(private activeroute : ActivatedRoute) { }
  
  filmeid: Number = 0;


  ngOnInit(): void {
    this.filmeid = this.activeroute.snapshot.params['id'];
  }

}
