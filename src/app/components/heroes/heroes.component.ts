import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroesSerice: HeroesService) { }

  ngOnInit() {

    this.heroes = this._heroesSerice.getHeroes();

    console.log(this.heroes);


  }

}
