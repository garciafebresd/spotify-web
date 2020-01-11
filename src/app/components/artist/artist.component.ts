import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {

    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params.id);
    });
  }

  getArtista(id: any) {
    this.spotifyService.getArtist(id).subscribe(data => {

    });
  }

}
