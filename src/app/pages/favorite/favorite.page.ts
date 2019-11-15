import { Component, OnInit } from '@angular/core';
import { AlldataService } from './../../services/alldata.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { AppComponent } from './../../app.component';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  items = [];
  fav = [];
  favorites = [];
  constructor(private appComp: AppComponent, private toastCtrl: ToastController, private storage: Storage, private alldata: AlldataService) { }

  ngOnInit() {
    // this.items= this.alldata.items;
    console.log(this.items);
    this.openFavorite();
    // this.storage.clear();

      this.storage.clear();
  }

  openFavorite() {
    this.fav == [];
    this.storage.get('favorite').then((val) => {
      this.favorites = val;
      let valLength = this.favorites.length;
      this.storage.set('badge', valLength);
      // console.log(this.favorites)
      let j = this.favorites.length;

      for (let i = 0; i < j; i++) {
        let searchTer = this.favorites[i];
        console.log(searchTer)
        if (val.length != 0) {
          // this.notFoumd = '';
          this.fav.push(this.alldata.getFavorites(searchTer))
          // console.log(this.fav)
        }

      }
      this.pushValue();

    });
  }
  pushValue() {
    this.items == [];
    let j = this.fav.length;

    for (let i = 0; i < j; i++) {
      this.items.push(this.fav[i][0]);
    }
    console.log(this.items);


  }

  async  removeFavorite(fav) {
    this.favorites = this.favorites.filter(function(item) {
      return item !== fav

    });

    this.items = this.items.filter(items => items.id !== fav);
    this.storage.set('favorite', this.favorites);

    let toast = await this.toastCtrl.create({
      message: 'Remove From Favorite',
      duration: 2000
    });
    toast.present();
    this.appComp.getBadge(this.favorites.length);




  }

}
