import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

 @Input() heroe: any = {};
 @Input() index: number;

 // @Output() heroeSelection: EventEmitter<number>;

  constructor(private router:Router) {
  // this.heroeSelection = new EventEmitter();
   }

  ngOnInit() {
  }

 viewHeroe(){
   console.log(this.index);
   this.router.navigate(['/heroe',this.index]);
   // this.heroeSelection.emit( this.index ); -> this one pass information (this.index) to the father component
  } 

}
