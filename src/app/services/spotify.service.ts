import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    
  }

  /*
  *  @Description: returns the url and headers of the request to the Spotify Web API
  *  @params: query:string => receives the part of the url that is going to be appendded to the const url
  *  @properties: url => base url of the service. 
  *               headers => request headers for each request.          
  *  @Author: MDAybar
  */
  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer QA1kfrTHvC9r5sGlHallKURY-FQC94l8UxCr-uerBTDG9LokJGMjCYOonBOGPJZverYtaKfSgyatW_qUHg'
    }); 

    return this.http.get(url, {headers})
  }

  /*
  *  @Descripcion: returns an array with the new releases from the Spotify Web API
  *  @Author: MDAybar
  */
  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items) );
  }

  /*
  *  @Descripcion: returns an array with the artists that match the term
  *  @params: findTerm:string => term that will be send to the Spotify Web API
  *  @Author: MDAybar
  */
  getArtists(findTerm:string){    
    return this.getQuery(`search?q=${findTerm}&type=artist`)
              .pipe( map(data=>data['artists'].items));
  }

  /*
  *  @Descripcion: returns the artist that match the id
  *  @params: id:string => artist id. 
  *  @Author: MDAybar
  */
  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
                //.pipe( map (data=>data));
  }

 /*
  *  @Descripcion: returns the top tracks of an artist
  *  @params: id:string => artist id. 
  *  @Author: MDAybar
  */
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=DO`)
            .pipe(map (data => data['tracks']));
  }

}

