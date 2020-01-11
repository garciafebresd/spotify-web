import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists: any[] = [];
  loader: boolean;

  constructor(private SpotifyService: SpotifyService) { }

  buscar(termino: string) {

    if (termino.length > 0) {
      this.loader = true;
            
      this.SpotifyService.getArtists(termino).subscribe(data => {
        this.artists = data;
        this.loader = false;
      });
    }


  }

}
