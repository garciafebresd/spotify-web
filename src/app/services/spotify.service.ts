import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      Authorization: 'Bearer BQCprILAM5WppblrhyRGn1_OWl9-buiZEwyLKPMgUzeX8AHKkVvBzDJEFNyqjiyd0IAyxmDcPuZSvmSwwrM'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.httpClient.get(url, { headers });
  }


  getNewReleases() {
      return this.getQueryUrl('browse/new-releases?country=CL&limit=20')
      .pipe( map( data => data.albums.items ));
  }

  getArtist() {

  }

  getArtists() {

  }


}
