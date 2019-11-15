import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AppComponent } from './../../app.component';
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  items: any;
  videoUrl: string;
  favorites = [];
  valLength : any;
  vTitle: string;
  vEpsodes: string;
  constructor( private appComp: AppComponent, private storage: Storage, private toastCtrl: ToastController,private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
     if (this.router.getCurrentNavigation().extras.state) {
       this.items = this.router.getCurrentNavigation().extras.state.user;
       this.videoUrl= this.items[0];
       this.items.shift();
        console.log(this.videoUrl)
     }
   });
  }

  ngOnInit() {
     // this.val  =  this.route.snapshot.paramMap.get('data');
     //
     // console.log(this.val);
     this.storage.get('favorite').then((val) => {
       this.valLength = val.length;
       if (this.valLength != 0){
       this.favorites = val;
       this.storage.set('badge', this.valLength);
       }
       console.log('valLength'+ this.valLength);
     });
     // console.log('my'+ my)

  }
  changeVideo(src,vEpsode,vTitles){
    let vid = document.getElementById('videos')
    vid.setAttribute( 'src', 'http://localhost/'+this.videoUrl+src+'.mp4');
    this.vTitle = vTitles;
    this.vEpsodes = vEpsode;
    // vid.currentTime=25;
  }
async  favorite(fav) {
    this.favorites.push(fav);
    this.favorites = this.favorites.filter(function(item, i, ar) { return ar.indexOf(item) === i; });
    this.storage.set('favorite', this.favorites);
    console.log(this.favorites)
    let toast = await this.toastCtrl.create({
      message: 'Add In To Favorite',
      duration: 2000
    });
     toast.present();
     // this.appComp.getBadge();
     this.appComp.getBadge(this.favorites.length);


  }
async  removeFavorite(fav){
    this.favorites = this.favorites.filter(function(item){
      return item !== fav
    });
    this.storage.set('favorite', this.favorites);
    let toast = await this.toastCtrl.create({
      message: 'Remove From Favorite',
      duration: 2000
    });
    toast.present();

    this.appComp.getBadge(this.favorites.length);



  }


}
