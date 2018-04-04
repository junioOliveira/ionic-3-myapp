import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMoovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=32f81cbc347df9a73fe920609f3cf578&language=pt-BR");
  }

}
