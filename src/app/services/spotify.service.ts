import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//IMPORT MAP OPERATOR 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit {

  newReleases: any[] = [];
  artist: any[] = [];
  artists: any[] = [];

  clientId = '3199dea3555e4b82a137022fe8966597';
  refreshToken = '5f47a928923d47019b4a0a92a6a81a60';
  token: string;

  constructor(private httpClient: HttpClient) {

    console.log('servicio spotify funcionando ');

    this.getToken().subscribe((data: any) => {

      console.log('done');
      console.log(data);

      this.token = data.access_token;

    }, responseError => {

      console.log('error during get token');

    });

  }

  getToken() {
    const url = `http://localhost:3000/spotify/${this.clientId}/${this.refreshToken}`;
    return this.httpClient.get(url, {});
  }

  getQueryUrl(query: string) {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.httpClient.get(url, { headers });

  }


  getNewReleases() {

    console.log('getNewReleases');
    console.log(this.token);

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
