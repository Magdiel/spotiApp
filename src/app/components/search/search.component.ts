import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private artists:any[] =[];
  loading:boolean;
  
  constructor( private spotify:SpotifyService ) {
      
   }

  ngOnInit() {
    
  }
  
  search(termino:string){
    if(termino){
      this.spotify.getArtists(termino)
        .subscribe( (data:any) => {
          this.loading= true;  
          this.artists = data;
          this.loading = false;
        });
      }
  }

}
