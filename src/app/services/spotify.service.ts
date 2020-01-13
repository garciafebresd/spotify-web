import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//IMPORT MAP OPERATOR 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  newReleases: any[] = [];
  artist: any[] = [];
  artists: any[] = [];


  constructor(private httpClient: HttpClient) {

    console.log('servicio spotify funcionando ');
  }


  getQueryUrl(query: string) {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDt76a347hAos8j5JjVvpUSQ3DOwkojBKX00Ldhc4MGKOGT_wSZmndac5BprIk3EX5nrvHncj51tGKGlf0'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.httpClient.get(url, { headers });

  }


  getNewReleases() {

    return this.getQueryUrl('browse/new-releases?country=CL&limit=20')
      .pipe(map(data => data['albums'].items));

  }

  getArtists(termino: string) {

    return this.getQueryUrl(`search?q=${termino}&type=artist&market=US`)
      .pipe(map(data => data['artists'].items));

  }

  getArtist(artistId: string) {

    return this.getQueryUrl(`artists/${artistId}`);

  }


  getTopTracks(artistId: string) {

    return this.getQueryUrl(`artists/${artistId}/top-tracks?country=US`)
      .pipe( map(data => data['tracks']) );

  }

}
