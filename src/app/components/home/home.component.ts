import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newReleases: any[] = [];
  loader: boolean;

  constructor(private SpotifyService: SpotifyService) {

    this.loader = true;

    this.SpotifyService.getNewReleases()
      .subscribe((data: any) => {
        this.newReleases = data;
        this.loader = false;
      });
  }


}
