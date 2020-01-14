import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newReleases: any[] = [];
  loader: boolean;
  error: boolean;
  messageError: string;

  constructor(private spotifyService: SpotifyService) {

    this.loader = true;
    this.loader = false;
    this.messageError = '';

    this.spotifyService.getNewReleases().subscribe(data => {

        this.newReleases = data;
        this.loader = false;

      }, responseError => {

        this.loader = false;
        this.error = true;
        this.messageError = responseError.error.error.message;

      });
  }


}
