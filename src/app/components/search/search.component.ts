import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists: any[] = [];
  loader: boolean;
  error: boolean;
  messageError: string;

  constructor(private spotifyService: SpotifyService) { }

  buscar(termino: string) {

    this.error = false;

    if (termino.length > 0) {
      this.loader = true;
      this.messageError = '';

      this.spotifyService.getArtists(termino).subscribe(data => {

        this.artists = data;
        this.loader = false;

      }, responseError => {

        this.loader = false;
        this.error = true;
        this.messageError = responseError.error.error.message;

      });
    }


  }

}
