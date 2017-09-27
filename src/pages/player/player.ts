import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  public url;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setUrl(){
    let trackId = this.navParams.get('trackId');
    this.url = 'https://www.deezer.com/plugins/player?type=tracks&id=' + trackId + '&format=square&color=007FEB&autoplay=true&playlist=true&width=700&height=240'
  }

}
