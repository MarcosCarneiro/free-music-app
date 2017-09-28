import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlayerPage } from '../player/player';
import { MusicApiProvider } from '../../providers/music-api/music-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public query: string;
  public tracks;

  constructor(public navCtrl: NavController, public musicApi: MusicApiProvider) {

  }

  searchTrack(){
    this.musicApi.search('track', this.query).subscribe(response => this.tracks = response.json().data);
  }

  goToPlayer(track){
    this.navCtrl.push(PlayerPage, { trackId: track });
  }

}
