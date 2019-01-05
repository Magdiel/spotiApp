import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  releases:any[] = [];
  loading:boolean;
  error:boolean;
  errorMessage:string;
  
  constructor( private spotify:SpotifyService ) { 
      this.loading = true;
      this.error = false;
      this.spotify.getNewReleases()
        .subscribe( (data:any) => {
          this.releases = data;
          this.loading = false;
        }, (error) => {
            this.error = true;
            this.loading = false;
            this.errorMessage = error.error.error.message;
            console.log(error.error.error.message);
        });
  }

  ngOnInit() {
  }

}
