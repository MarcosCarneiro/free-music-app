import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MusicApiProvider {

  constructor(public http: Http) {
  }

  public readonly BASE_API = 'https://api.deezer.com/';

  search(type: string, query: string){
    return this.http.get(`${this.BASE_API}/search/${type}?q=${query}`);
  }

}
