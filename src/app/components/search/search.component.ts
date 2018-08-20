import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _HeroesService: HeroesService) {
   }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.search = this._HeroesService.searchHeroes( params['termino'] );
      console.log(this.search);
    });

  }

  

}
