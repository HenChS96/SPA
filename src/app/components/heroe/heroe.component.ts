import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private HeroesServie: HeroesService ) { 
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.HeroesServie.getHeroe( params['id'] );
      console.log(this.heroe);
      
    })
   }

  ngOnInit() {
  }

}
