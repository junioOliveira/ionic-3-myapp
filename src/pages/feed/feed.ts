import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {

    titulo: "Junio Vicente",
    data: "Abril 4, 2018",
    descricao: "Estou criando um app bacana...",
    qntd_likes: 10,
    qntd_comments: 4,
    time_comment: "12h ago"

  }

  public listMovies = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FeedPage');
    this.movieProvider.getLatestMoovies().subscribe(
      data => {
        const response = (data as any);
        const object_retorno = JSON.parse(response._body);
        
        console.log(object_retorno);

        this.listMovies = object_retorno.results;

        
      }, error => {
        console.log(error);
      })
  }

}
