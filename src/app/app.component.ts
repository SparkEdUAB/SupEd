import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
// import { CodePush, SyncStatus } from '@ionic-native/code-push/ngx';
import { ThemeService } from './services/theme.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  badge: any = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'My Favorite',
    //   url: '/favorite',
    //   icon: 'heart',
    //
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    // private codePush: CodePush,
    private theme: ThemeService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.storage.clear();
    this.initializeApp();
    this.getBadge('bval');
    this.getUserinfo();
    this.storage.get('badge').then((val) => {
      this.badge = val;
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //
      // this.codePush.sync({},(progress)=>{
      //
      // }).subscribe((status)=>{
      //   if(status == SyncStatus.CHECKING_FOR_UPDATE)
      //   alert('CHECKING_FOR_UPDATE')
      //   if(status == SyncStatus.DOWNLOADING_PACKAGE)
      //   alert('DOWNLOADING_PACKAGE')
      //   if(status == SyncStatus.IN_PROGRESS)
      //   alert('IN_PROGRESS')
      //   if(status == SyncStatus.INSTALLING_UPDATE)
      //   alert('INSTALLING_UPDATE')
      //   if(status == SyncStatus.UP_TO_DATE)
      //   alert('UP_TO_DATE')
      //   if(status == SyncStatus.UPDATE_INSTALLED)
      //   alert('UPDATE_INSTALLED')
      //   if(status == SyncStatus.ERROR)
      //   alert('ERROR')
      //
      //
      //
      // })

      // console.log("platform source " + source);
    });
    // const updateUrl = 'http://172.16.0.24/update.xml';
    //         this.appUpdate.checkAppUpdate(updateUrl).then(() => { console.log('Update available') });
  }
  getBadge(bval) {
    this.badge = bval
    console.log(bval);

    this.authenticationService.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['login']);
      }
    });

  }
  appUpdate() {

  }
  enableDark() {
   this.theme.enableDark();
 }

 enableLight() {
   this.theme.enableLight();
 }
 getUserinfo(){

 this.storage.get('UserInfo').then((val) => {
   console.log(val)
 });
}
}
