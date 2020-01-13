import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any = {};
  loader: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService) {

    this.loader = true;

    this.activatedRoute.params.subscribe(params => {

      this.getArtist(params.id);
      this.getTopTracks(params.id);

    });
  }

  getArtist(id: string) {

    this.loader = true;

    this.spotifyService.getArtist(id).subscribe(data => {

      this.artist = data;
      this.loader = false;

    });
  }

  getTopTracks(id: string) {

    this.spotifyService.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
    });

  }

}
