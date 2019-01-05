import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  private artist:any = {};
  private topTracks:any[];
  loading:boolean;
  
  @Input() artistId:any;

  constructor(private spotify:SpotifyService,
              private router: ActivatedRoute            
    ) {
       
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit() {
  }

  getArtist(id:any){
    this.loading = true;
    this.spotify.getArtist(id)
        .subscribe((data:any) => {
          
          this.artist = data;
          this.loading = false;
    }); 
  }

  getTopTracks(id:string){
    
    this.spotify.getTopTracks(id)
      .subscribe((data:any) => {
        this.topTracks = data;
      });
  }

}
