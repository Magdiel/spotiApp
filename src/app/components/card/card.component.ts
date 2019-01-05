import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})

export class CardComponent implements OnInit {

  @Input() item:any[];

  constructor( private router:Router) { }

  ngOnInit() {
  }

  verArtista(item:any){
    let artistId;

    if(item.type === 'artist'){
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }

}
